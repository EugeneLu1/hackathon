package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"os"
	"os/exec"

	"github.com/google/uuid"
	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
)

type Question struct {
	Title string  `json:"title"`
	ID    string  `json:"id"`
	Score float64 `json: "relevance"`
}

type GetResponse struct {
	Questions []Question `json:"questions"`
}

type OutputJSON struct {
	SurveyID   `json:"survey_id"`
	QuestionID `json:"question_id"`
	Relevance  `json:"relevance"`
}

type QuestionID struct {
	One   string `json:"1"`
	Two   string `json:"2"`
	Three string `json:"3"`
	Four  string `json:"4"`
	Five  string `json:"5"`
}

type SurveyID struct {
	One   int `json:"1"`
	Two   int `json:"2"`
	Three int `json:"3"`
	Four  int `json:"4"`
	Five  int `json:"5"`
}

type Relevance struct {
	One   float64 `json:"1"`
	Two   float64 `json:"2"`
	Three float64 `json:"3"`
	Four  float64 `json:"4"`
	Five  float64 `json:"5"`
}

// JSON write a JSON response to the HTTP writer
func JSON(w http.ResponseWriter, r *http.Request, status int, v interface{}) {
	b, err := json.Marshal(v)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	w.Write(b)
}

func getHandler(w http.ResponseWriter, r *http.Request) {
	log.Info().Msg("GET request received")
	cmd := exec.Command("./run.sh")
	out, err := cmd.Output()
	if err != nil {
		log.Error().Err(err).Msgf("An Error occured: %+v", err)
		JSON(w, r, 400, nil)
		return
	}

	log.Info().Msgf("out: %s", out)
	jsonFile, err := os.Open("./output.json")
	bytes, _ := ioutil.ReadAll(jsonFile)

	var outputJSON OutputJSON
	if err := json.Unmarshal(bytes, &outputJSON); err != nil {
		log.Error().Err(err).Msgf("Failed to unmarshal JSON")
	}

	secondJSONFile, err := os.Open("./echo_output.json")
	secondBytes, _ := ioutil.ReadAll(secondJSONFile)

	var secondOutputJSON OutputJSON
	if err := json.Unmarshal(secondBytes, &secondOutputJSON); err != nil {
		log.Error().Err(err).Msgf("Failed to unmarshal JSON")
	}

	log.Info().Msgf("2nd output %+v ", secondOutputJSON)

	getResponse := GetResponse{
		Questions: []Question{
			{
				ID:    uuid.New().String(),
				Title: "How do you like your Amazon Kindle?",
				Score: (outputJSON.Relevance.One + outputJSON.Relevance.Two + outputJSON.Relevance.Three + outputJSON.Relevance.Four + outputJSON.Relevance.Five) / 5,
			},
			{
				ID:    uuid.New().String(),
				Title: "How do you like your Amazon Echo",
				Score: (secondOutputJSON.Relevance.One + secondOutputJSON.Relevance.Two + secondOutputJSON.Relevance.Three + secondOutputJSON.Relevance.Four + secondOutputJSON.Relevance.Five) / 5,
			},
		},
	}
	JSON(w, r, 200, getResponse)
}

func postHandler(w http.ResponseWriter, r *http.Request) {
	log.Info().Msg("POST request received")
}

func main() {
	router := mux.NewRouter().StrictSlash((true))
	router.HandleFunc("/", getHandler).Methods(("GET"))
	router.HandleFunc("/", postHandler).Methods(("POST"))

	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Error().Err(err).Msg(("failed to start http server"))
	}
}

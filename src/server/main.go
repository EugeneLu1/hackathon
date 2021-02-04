package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/zerolog/log"
)

type GetResponse struct {
	Data string `json:"data"`
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
	log.Info().Msg("request received")

	getResponse := GetResponse{"test"}
	JSON(w, r, 200, getResponse)

}

func main() {
	router := mux.NewRouter().StrictSlash((true))
	router.HandleFunc("/", getHandler).Methods(("GET"))

	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Error().Err(err).Msg(("failed to start http server"))
	}
}

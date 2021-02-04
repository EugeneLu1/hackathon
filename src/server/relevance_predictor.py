import argparse
import joblib
import pandas as pd
import sklearn
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer

def predict_relevance(model_pkg, data):
    model = model_pkg['model']
    vectorizer = model_pkg['vectorizer']
    bow = vectorizer.transform(data['response'])
    probs = model.predict_proba(bow)[:, 1]
    relevance = probs*10 
    data['relevance'] = relevance
    return data[['survey_id', 'question_id', 'relevance']]

def main():
   parser = argparse.ArgumentParser()
   parser.add_argument("input", help="input json")
   parser.add_argument("output", help="output json")
   parser.add_argument("model", help="model path")

   args = parser.parse_args()

   data = pd.read_json(args.input)
   model_package = joblib.load(args.model)
   predicted_relevance = predict_relevance(model_package, data)
   predicted_relevance.to_json(args.output) 
   print("done")
if __name__ == "__main__":
    main()
import gpt4all

# Setup GPT4ALL
gptj = gpt4all.GPT4All

# Retrieve the model in data/models
gptj.retrieve_model("GPT4All-13B-snoozy.ggmlv3.q4_0", "data/models")

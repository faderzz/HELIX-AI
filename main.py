import gpt4all

# Setup GPT4ALL
gptj = gpt4all.GPT4All("ggml-gpt4all-j-v1.3-groovy")
# Download model to data/models folder
gptj.download_model()
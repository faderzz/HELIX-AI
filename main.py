import gpt4all

# Setup GPT4ALL
model = "GPT4All-13B-snoozy.ggmlv3.q4_0"
gptj = gpt4all.GPT4All
prompts = []

# Retrieve the model in data/models
gptj.retrieve_model(model, "data/models")

# Generation
Commands = [
    "\n OPEN - Usage: 'OPEN (FILE LOCATION)' to open any program, e.g. 'OPEN D:\Games\Cyberpunk 2077\cp2077.exe'.",
    "\n CREATECOMMAND - Usage: 'CREATECOMMAND (COMMAND NAME) (PYTHON SCRIPT TO FOR THE COMMANDS FUNCTION)' to create a command, e.g. 'CREATECOMMAND helloworld ```print('hello world')```. This command creates a command with the command name as an alias",
    "\n TURINGINFO - Usage: `TURINGINFO` - OUTPUT: `Time: 07:09AM, Location: United Kingdom, London`"
]
rolePrompt = "You can run the following commands when needed such as: "

for i in Commands:
    rolePrompt += i

rolePrompt = {"role": "assistant", "content": rolePrompt}
# Add rolePrompt to prompt
prompts.append(rolePrompt)

def userMessage(message):
    # Add user message to prompt
    addMessage = {
        "role": "user", 
        "content": message
        }
    # Add dictionary to prompts array
    prompts.append(addMessage)
    print(prompts)
    sendPrompt(prompts)

def sendPrompt(finalPrompt):
    # Call the chat_completion method with the prompt list
    print(gptj.chat_completion(finalPrompt, False, False, False))

userMessage("Hello")
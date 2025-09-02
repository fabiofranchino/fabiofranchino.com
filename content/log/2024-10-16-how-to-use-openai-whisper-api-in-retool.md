---
title: "How to use OpenAI Whisper API in Retool"
date: 2024-10-16 07:04:00 +0100
subtitle: 16th October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



With OpenAI Whisper, converting audio speech to text becomes easy and opens up opportunities for building powerful applications. Whisper can transcribe audio into raw text, which can then be stored in a database, searched, and further manipulated. Integrating this capability in Retool creates even more potential by combining data and automation in one place. Let’s explore how to build a simple app using Whisper’s speech-to-text API in Retool.

### Prerequisites

Before we begin, you’ll need the following:

- An OpenAI API key
- A Retool account



### Create a Retool REST resource

Start by creating a REST API resource in Retool. The Whisper API will be the base URL, and you’ll need to authenticate using your OpenAI API key.

1. Go to **Retool Resources**, and add a new **REST API** resource.
2. Set the **Base URL** to `https://api.openai.com/v1/audio/transcriptions`.
3. For the **Method**, select `POST`.
4. Add the Authorization header with a valid OpenAI API KEY for authentication

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/01.png)



### Create the minimal interface to upload an audio file

We’ll now create a minimal interface that allows users to upload an audio file for transcription.

Add a **File Picker** component to your Retool app to let users upload an audio file. Named `fileButton1`.

Whisper's API requires, so the request body will need two fields

```
model
```

 and 

```
file
```

- Set the `model` field to `whisper-1`.
- For the `file` field, bind it to the **File Picker** component using `{{ fileButton1.file[0] }}`.

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/02.png)



### Test the connection

If all the parts are correctly connected, we should see a similar situation when pressing "Run" to the query:

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/03.png)



### Display the converted text

To display the converted text, we’ll add a **Text Area** component that updates with the transcription result.

Drag a **Text Area** component into the interface.

Bind the component to the transcription response using:

```js
{ { query1.data?.text } }
```

This will display the text returned from the Whisper API after a successful transcription.

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/06.png)



### Handle file size limit errors

One common issue when working with audio files is hitting file size limits. The Whisper API has size restrictions, and if you hit this limit, you’ll need to split the file into smaller chunks and transcribe each part individually. You can then concatenate the transcribed results.

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/04.png)

### Handle timeout errors

Another possible issue is the API request timing out for longer files. If this happens, you can increase the timeout setting in Retool’s **Advanced** tab for your Whisper API resource. Set it to a higher value, such as 120 seconds, to handle longer processing times.

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/05.png)





### Going beyond

Once you have your raw text, the sky's the limit. You can add more components to your Retool app, such as buttons to store the transcribed text in a database or a search feature to browse through past transcriptions.

Here’s a simple example:

- Add a **Button** that triggers a query to save the transcription to a database.
- Include a **Dropdown Selector** to categorize the transcription (e.g., meeting notes, interviews).

![](/assets/blog/how-to-integrate-openai-whisper-api-in-retool/07.png)

With these steps, you now have a fully functional Retool app that integrates OpenAI Whisper for speech-to-text conversion. From here, you can extend its functionality as needed—perhaps building a searchable repository of meeting notes or automating workflows that involve audio data.


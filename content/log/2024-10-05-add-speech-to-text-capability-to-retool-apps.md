---
title: "Add speech to text capability to Retool apps"
date: 2024-10-05 07:04:00 +0100
subtitle: 5th October, 2024
description: ""
categories: Logs
tags: [log]
layout: "layouts/blog.njk"
permalink: "/{{ page.filePathStem }}/"
---



What if your Retool app could listen to and record your voice? That idea opens up a world of possibilities for enhancing user interactions, streamlining processes, and improving how information is collected. Imagine recording voice notes directly in a Retool app, converting speech to text, and then using that text to fuel workflows such as saving it to a database, generating summaries, or even feeding it into AI models for further processing.

![](/assets/blog/add-speech-to-text-capability-to-retool-apps/speech2textplugin.webp)

This capability has already been made possible through a custom component we’ve created for Retool, and we’re excited to share that this is our **first public plugin** for the platform. It's a **free and open-source tool** designed to bring **Speech-to-Text functionality** to Retool apps. Leveraging the **Chrome internal Speech-to-Text engine**, this plugin offers a lightweight solution that integrates smoothly with the Retool environment. It even includes customizable settings to tailor the speech recognition experience to your app's specific needs.

The component itself is minimal—just a button styled to mimic the Retool interface. Clicking the button triggers the voice recording process, transforming spoken words into actionable text. From there, the possibilities are vast: store the transcription in a database, run a summarization model, or use it to trigger custom workflows.

For teams that use Retool heavily, this plugin brings significant benefits. It enhances data entry tasks, cuts down on manual typing, and enables voice-powered interactions that can improve speed and user experience, especially in mobile or hands-free scenarios. Plus, being **open-source**, it's flexible and can be adapted or extended based on your needs.

We’re committed to contributing to the Retool ecosystem, and this is just one of many tools we’re building to improve how teams use the platform. To get started, check out the full documentation, including **installation instructions**, **configurations**, and **usage examples**, [available on GitHub](https://github.com/EloquentOps/retool-plugin-speech2text).

### Key Features

- **Voice recording and speech-to-text**: Uses Chrome’s internal Speech-to-Text functionality to convert spoken words into text.
- **Retool integration**: Seamless integration into your existing Retool apps.
- **Minimal UI**: Simple button interface that blends with Retool’s look and feel.
- **Customizable settings**: Adjust settings to meet your needs.
- **Free and open source**: Available for modification and extension.

Whether you're looking to improve data collection, automate workflows, or make your app more accessible, voice functionality in Retool can add new dimensions to how your applications operate. Dive into the documentation and see how this small yet powerful component can transform your Retool apps.

### Installation

Drag a Custom Component into your canvas in a Retool app.

Put this code into the `IFrame Code` area of the Custom Component:

```html
<script src="https://unpkg.com/@eloquentops/retool-plugin-speech2text"></script>
```

Allow the following checkbox in the `interaction` section of the Custom Component:

-  Microphone
-  Storage and cookies

### Configuration

You can add options in the `Model` such this example (values are the default).

Important

An empty object `{}` is required! Do not leave empty.

```js
{
    lang: 'en-US',
    continuous: false,
    interimResults: true,
    maxAlternatives: 1,
}
```

Please refer to this [official documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) about the `SpeechRecognition` options.

Further options are:

```js
{
  keepActive: true,
  labelStart: 'Start',
  labelStop: 'Stop'
}
```

`keepActive` is a custom option that force the restart of the speech in case of silence. Otherwise the `SpeechRecognition` will close automatically after few seconds of silence.

The component renders a single button, thus, you can configure labels of the two states.

Important

Right now, when you change an option in the Model, you need to reload the component, because `SpeechRecognition` cannot be reset at runtime. If you need to set an option through another component at runtime, such as select the language, you can trigger a custom component reload during on-change event of the select component.

### How to get back the text

Fair question. The component exposes two additional properties in its model:

```js
{
  lastMessage: '', // String
  messages: [] // Array of strings
}
```

So, you can bind them to your Retool components as you normally would do, such as:

```
Last message: { { customComponent2.model?.lastMessage } }
```

 

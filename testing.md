# Code Validation

Code Validation was completed via third party applications, in order to assess the markdown syntax and logical application of the languages used.

1. [**W3 Markup Validation**](https://validator.w3.org/) – HTML Validation

  - The project's HTML was validated using the automated W3 Markup Validator at intervals throughout the development process.
  - At no point were Errors presented.
  - At final deployment, no Errors or Warnings are present.

2. [**W3 Jigsaw**](https://jigsaw.w3.org/css-validator/) – CSS Validation

  - The project's CSS was validated using the automated W3 Jigsaw Validator at intervals throughout the development process.
  - One Error was identified, regarding the auto not being defined by any specification as an allowed value for pointer-events, but since this is allowed in multiple browsers I'm not too worried about this issue.

3. [**JSHint**](https://jshint.com/) - JS Validation

  - The project's JavaScript was validated using the open source automated service, JSHint, at intervals throughout the development process.
  - All three Javascript files passed, however game.js experienced one warning message due to Async functions which are only available in ES8, but I'm not too worried about this issue. Any other warning messages are due to ES6 Compatibility; I'm aware of these and am satisfied these can be dismissed.

### Lighthouse

Lighthouse was used to investigate the performance, accessibility, best practices and SEO of the website.

### Desktop Results

All scores are positive

![index.html](documents/indexdesktop.png)

![game.html](documents/gamedesktop.png)

![highscores.html](documents/highscoresdesktop.png)

![404.html](documents/404desktop.png)

![500.html](documents/500desktop.png)

### Mobile Results

Lighthouse was used to investigate the performance, accessibility, best practices and SEO of the website.

All scores are positive.

![index.html](documents/indexmobile.png)

![game.html](documents/gamemobile.png)

![highscores.html](documents/highscoresmobile.png)

![404.html](documents/404mobile.png)

![500.html](documents/500mobile.png)

# Science Star - Testing Document

## User Story Testing

### "I want to know what the website does upon my first visit, so that I can decide whether I'm interested in utilising it."

Achiement: When the user first visits the website they are presented with the logo "Science Star", which explains the science nature of the quiz. In addition to this, the site also has an over view explaining its purpose. Lastly, to eliminate any confusion at all, there is also a set of instrucitons for the user explaining how to interact with the quiz.

Outcome: **Pass**

### "I want to improve my science skills to improve my capabilities for exams or personal knowledge."

Achievement: I have ensured that the user can receieve instant feedback of their results from the quiz based on a score counter and also red & green colours to indicate whether an answer was correct or not.

Outcome: **Pass**

### "I want the site to be easy to naviagate."

Achievement: The user is present with a simple user interface which is simple to navigate and there are instructions explaining to them that they can return back to this page by clicking on the top title.

## Code Validation

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

![game.html](documents/gamedesktopmobile.png)

![highscores.html](documents/highscoresmobile.png)

![404.html](documents/404mboile.png)

![500.html](documents/500mobile.png)

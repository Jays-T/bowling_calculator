# Code Challenge

## The challenge is to build:
- A calculator service that consist of the bowling logic (Backend. If doing frontend only make this service in frontend only) This service can can have a function like function calculate(currentRoll: Roll, historicRolls: array of Rolls)
- A view to fill in all the bowling values (Frontend)
- Atleast one stateless component (Frontend)
- Proper interfaces and types (Frontend and Backend)

- For this challenge I chose to work with JavaScript using Vue as my frontend framework. 
- I had never used Vue before but I wanted to push myself.
- I watched a crash course on Vue youtube video from Brad Traversy and set off on my quest.

## There are two versions
- [Main App](https://jays-t.github.io/bowling_calculator/)
- [Legacy App](https://jays-t.github.io/bowling_calculator/legacy/index_legacy.html)

The reason for this is because my first attempt and approach was the Legacy app. I went with the way I 'know' how to do things. Manually adding multiple elements and trying to manipulate them after the fact. Pushing the 'pins' knocked down on each roll into an array. Iterating over the entire sequence of rolls and frames calculating the over all score.
The limitations of this approach are clearly demonstrated in [this clip](https://gyazo.com/7fc9f205acea8fb0cd6b3d03c6ed805a)
The overall score updates, but the frame scores do not update correctly as Spare and Strike bonuses are only calculated after all the rolls have been completed. At this point, dynamically updating frame by frame becomes very tricky to solve. Also managing the state of each element becomes very cumbersome (manually entering index values of an array).

My time was limited but I took a further look into Vue js lifecycle hooks, set my initial app as legacy_app and then set about adjusting my approach. 

# ISSUES AND BUGS
- Unable to get until Testing running correctly
  * TypeError: Vue.createApp is not a function
## Main app
- After Bowling a strike you must bowl a 0 to finish frame
- If you bowl a second strike later in the game, score only updates on the first frame where a strike was hit
- Bowling three strikes in a row, or a full game of only strikes, will not score correctly as the scoring logic currently only:
  * checks if the first roll is 10
  * if roll is 10 strike is set to true
  * on the next frame if strike is set to true, the score will append the scores of both rolls in the current frame to the score of the previous frame when the strike occured and strike will then be set to false
  * The scoring does not check if there was a strike 2 frames ago
## Legacy app
- Scoring is not rendered dynamically

# What does and does not work
# [Main App](https://jays-t.github.io/bowling_calculator/)
## What does work
- Bowling all 0 will give you a score of 0.
- Bowling all 1 will give you a score of 20.
- Bowling 5/5, 3/0 will give you a score of 16.
- Bowling 10 (you then have to bowl 0 to move to the next frame), 1/1 will give you a score of 14.
- Bowling 10 (you then have to bowl 0 to move to the next frame), 5/5, 4/0 will give you a score of 38.
## What does not work
- Bowling 10 strikes will give you a score of 190 which is incorrect.

## [Legacy App](https://jays-t.github.io/bowling_calculator/legacy/index_legacy.html)
## What does work
- Bowling all 0 will give you a score of 0.
- Bowling all 1 will give you a score of 20.
- Bowling 5/5, 3/0 will give you a score of 16.
- Bowling 10, 1/1 will give you a score of 14.
- Bowling 10, 5/5, 4/0 will give you a score of 38.
- Bowling 10 strikes will give you a score of 300.

## What does not work
- Frame by Frame score does not update correctly when bowling a Strike or multiple Strikes


## Images sourced from nicepng.com and favpng.com


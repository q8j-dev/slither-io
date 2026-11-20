# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Inferred: a single player opening the game in a desktop or phone browser for short casual sessions, without an account or network connection.

## Product Purpose
Inferred: an offline single-player snake arena. The player grows by eating food and survives against AI snakes. Success is a fun, readable round that starts in one click and restarts instantly.

## Positioning
Inferred: the classic snake-arena loop with no server, no ads and no sign-in; everything, including the AI opponents, runs in the page.

## Capabilities and Constraints
- Runs from `index.html` with no build step and no network access; fonts and images ship in the repo.
- Canvas-rendered arena (`js/game.js`), DOM overlay for menu and HUD.
- Controls: mouse or touch to steer, hold to boost, arrow keys, Enter to play.
- Skin picker and custom skin builder persist to localStorage.

## Brand Commitments
The animated snake-letter logo is kept as the game's mark.

## Product Principles
- One click from the menu to playing.
- The arena stays readable at speed: snakes and food must pop against the floor.
- Offline first: nothing may depend on a remote request.

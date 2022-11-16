# Civs N

## Purpose

The purpose of given repository is to provide an implementation of given game respecting given tests that follow the rules of the game. Short description of the game is given below.

This repository also gives possibility to learn and practice 
- the usage of a few design patterns (few in generic forms)
- TDD (test driven development) technique

## Commands

### Install dependencies
```bash
npm install
```

### Run tests
```bash
npm test
```
For UI version:
```bash
npm run test:ui
```

## Requirements

There are multiple requirements that need to be met in order to run the application.
Most of them are already documented as tests in `__tests__` folders.

### Short summary:
### `Game`
- consists of
  - given `orientation`
    - rectangular
    - cubic
    - hexagonal
  - units that have
    - name
    - type
    - and position in given `orientation`
  - logs
    - level (info, warning, error)
    - text
#### `Commands`
- `Create Board`
  - with given `orientation strategy`
    - rectangular 
    - hexagonal
    - cubic
  - should not create a board when
    - unknown orientation strategy is given
    - improper dimensions are given
- `Create Unit`
  - named
  - types
    - dragon
    - wizard
    - knight
    - peasant
  - should not create a unit when
    - unknown unit type is given
    - name is already taken
    - improper coordinates are given according to the given `orientation`
- `Move`
  - in direction relevant to given `orientation`
  - in a given distance
  - should not move a unit when a **wizard** is nearby 
- `Fire`
  - in direction relevant to given `orientation`
  - only **dragons** can fire
  - should not fire when a **wizard** is nearby
  - unit hit should be removed from the board
  - multi kill 
    - when multiple units are hit in given direction, 
    - they should all be removed from the board
    - it is **x-raying** action
- General
  - should return error when given command is not found of has improper arguments
  - should inform about results of all actions
  - should warn about improper actions due to the rules of the game

#### `Specifications`
- `isBoardSizeInRange`
  - should return whether given board size is in range
- `isWithinBounds`
  - should return whether given coordinates are within bounds of the board
- `isWizardNearby`
  - should return whether a **wizard** is nearby
    - in a **distance** given by `orientation` lower than `1.5`
- `isUnitNameUnique`
  - should return whether a unit name is unique
- `isUnitOfType`
  - should return whether a unit is of given type

#### `Orientations`
- `Rectangular`
  - N x M
  - works like typical chess board
  - distance is given by Pitagoras theorem
  - allowed directions are `N`, `S`, `E`, `W`, `NE`, `SE`, `SW`, `NW`
- `Cubic`
  - N x M x H
  - same as rectangular, but with additional dimension
  - allowed directions are 
    - same as rectangular
    - with additional `U` and `D` for up and down
      - and all related combinations
  - distance is given by Pitagoras theorem
- `Hexagonal`
  - N x M
  - similar to rectangular, but with hexagonal cells
    - it can be imagined as a tilted chess board
  - allowed directions are `E`, `W`, `NE`, `SE`, `SW`, `NW`
  - distance is given by Pitagoras theorem

#### `Patterns`
- there are already some generic patterns used like:
  - command
  - chain of responsibility
  - composite
    - of commands
  - specification
  - factories
  - builders
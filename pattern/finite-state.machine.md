# Finite State Machine

It is conceived as an abstract machine that can be in one of a finite number of states.
* The machine is in only one state at a time.
* the state it is in at any given time is called the current state
* It can change from one state to another when initiated by a triggering event or condition, this is called a transition
* A particular FSM is defined by a list of its states, its initial state, and the triggering condition for each transition

### Example: Turnstile

A turnstile, used to control access to subways and amusement park rides, is a gate with three rotating arms at waist height, one across the entryway. Initially the arms are locked, blocking the entry, preventing patrons from passing through. Depositing a coin or token in a slot on the turnstile unlocks the arms, allowing a single customer to push through. After the customer passes through, the arms are locked again until another coin is inserted.

the turnstile has two states: ***Locked*** and ***Unlocked***.


### Implementation

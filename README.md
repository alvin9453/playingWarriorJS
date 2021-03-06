## OAQ - beginner - level 5

### _You hear cries for help. Captives must need rescuing._

> **TIP:** Use `warrior.feel().isCaptive()` to see if there's a captive and `warrior.rescue()` to rescue him. Don't attack captives.


### Floor Map

```
╔═══════╗
║@ CaaSC║
╚═══════╝

@ = OAQ (20 HP)
C = Captive (1 HP)
a = Archer (7 HP)
S = Thick Sludge (24 HP)
```

### Abilities

#### Actions (only one per turn)

* `warrior.rescue()`: Rescue a captive from his chains (earning a reward) in the given direction (forward by default).
* `warrior.walk()`: Move one space in the given direction (forward by default).
* `warrior.attack()`: Attack a unit in the given direction (forward by default) dealing 5 HP of damage.
* `warrior.rest()`: Gain 10% of max health back, but do nothing more.

#### Senses

* `warrior.feel()`: Return the adjacent space in the given direction (forward by default).
* `warrior.health()`: Return an integer representing your health.

### Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.

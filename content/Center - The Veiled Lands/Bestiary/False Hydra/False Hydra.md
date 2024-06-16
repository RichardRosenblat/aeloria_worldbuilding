---
tags:
  - creature
---
# False Hydra

## Information

### Mysterious Origin

Nobody really knows the true nature of the false hydra. Scholars the world over are left guessing as to the true nature of these creatures. What is known is that by the time their presence is apparent, it is often too late.

The false hydra begins its life cycle as a lump of white flesh, growing and festering deep beneath the ground of a town or city. Their genesis is brought on by an abundance of lies and half-truths told by members of a community, manifesting in kingdoms where propaganda has become out of control. Eventually, the small fleshy mass, no larger than a fist, grows to the size of a small child and sprouts a single head on a prehensile neck. This is when the false hydra truly begins its cycle.

It burrows up through the ground until it reaches the surface, or a chamber with easy access to the surface of the ground, such as a sewer, cave, or castle basement. Once it emerges, the false hydra begins to sing a deep and guttural dirge that can be faintly heard for miles around. This song makes all who hear it unable to perceive the false hydra. This is not invisibility, but something much more insidious. The false hydra removes itself from the mind of every sentient creature that can hear its song, meaning it can still be seen, but it is immediately forgotten by those who see it even as they stare directly at its moony face.

### Confabulation

As the hydra begins to feed on the people of a town in order to grow larger and sprout more heads, locals are destined to notice something is amiss. They wonder where the local priest has gone or why their loved ones are no longer in town. The false hydra’s song will cause people to create new memories to make their new reality logical. Those under the effects of the song might say things like “the baker isn’t just missing; he left town to fight in the king’s army.” These logical leaps become increasingly more difficult to justify as more people go missing. For example, someone whose husband has been eaten by the false hydra might try to justify all the men’s clothing in their home by saying a visiting relative left them there. To an outsider, things will be obviously wrong, and to those trapped under the false hydra’s influence, the mounting weight of all this cognitive dissonance is liable to lead to madness.

### Horrid Growth

The false hydra’s hunger knows no bounds. As the creature eats and grows both in size and the number of heads, it becomes more bold. Once it has fully grown to a state of maturity, it will drop all pretense and emerge from the ground as a mature false hydra. It then begins to sing a different song, one that dominates and enslaves the vast majority of those who hear it. The false hydra will have all who are able to resist its domination rounded up and eaten until it is sure that the remaining members of the population are enslaved to it. It will then have its thralls carry it on their backs to the next town, where it will continue to dominate and consume in a futile attempt to quench the unending appetite it holds.

Eventually, the false hydra will become so large that it must be pulled by its thralls. It will have the creatures it is dominating wrap chains and rope around its body and drag the monster ever onward in a tour of blood and gore. Eventually, the false hydra will gorge itself into a non-sustainable position where it becomes impossible to eat enough to sustain its form. The least moments of a false hydra are usually spent gorging on its thralls in a final attempt to satisfy its appetite.

### Entropic Ends

A false hydra will always inexorably eat itself to death. The only question is whether it takes days, weeks, [[months]], or years. The best way to avoid a catastrophic result when a false hydra becomes a problem is to simply avoid it and remove its food supply. The ultimate safeguard, however, is prevention.


## Appearance
![[false hydra appearance.png]]
[_Google Images_](https://www.myminifactory.com/fr/prints/3d-print-the-false-hydra-60073)

## Statblocks

### Png statblocks

![[False Hydra stat.png]]
![[Mature False Hydra stat.png]]

### Plugin statblocks

```statblock
name: False Hydra
size: Small
type: aberration
alignment: neutral evil
ac: 16
hp: 32
hit_dice: 5d6 + 15
speed: 25 ft., burrow 25 ft.
stats: [16, 14, 16, 12, 20, 8]
fage_stats: []
saves: 
  - STR: 3
skillsaves:
  - Perception: 8
damage_vulnerabilities: 
damage_resistances: psychic
damage_immunities: 
condition_immunities: petrified
senses: darkvision 120 ft., passive Perception 18
languages: Any language known by a creature it has consumed
cr: 8
spells:
  - Discordant Song
traits:
  - name: Multiple Heads
    desc: |-
      The false hydra begins its life with one head, however, as it consumes more humanoid creatures the number of heads increases and it grows larger. Every time the false hydra grows a new head, its maximum Hit Points are increased by 30. The number of creatures the false hydra must consume to grow another head also increases with each head that it grows. Consult the table below to determine how many humanoids the false hydra must consume to grow another head. If it grows 7 heads, the false hydra transforms into a Mature False Hydra after taking a long rest. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.

      | Creatures Consumed  | Number of Heads | False Hydra Size |
      |----------------------|------------------|------------------|
      | 0 creatures consumed | 1 head           | Small            |
      | 3 creatures consumed | 2 heads          | Medium           |
      | 8 creatures consumed | 3 heads          | Medium           |
      | 18 creatures consumed| 4 heads          | Large            |
      | 35 creatures consumed | 5 heads          | Large            |
      | 70 creatures consumed | 6 heads          | Huge             |
      | 120 creatures consumed| 7 heads          | Huge             |

  - name: Neck Stalks
    desc: |-
      The false hydra’s heads extend a long distance from its body. Whenever a head attacks a creature more than 15 ft. away from the body, the head provokes an attack of opportunity.

  - name: Reactive Heads
    desc: |-
      For each head the false hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.

actions:
  - name: Multiattack
    desc: The false hydra makes as many bite attacks as it has heads.

  - name: Bite
    desc: |-
      Melee Weapon Attack: +6 to hit, reach 30 ft., one creature.
      Hit: 8 (1d10 + 3) piercing damage and the target is grappled.

  - name: Discordant Song
    desc: |-
      The false hydra sings a discordant song. All creatures that can hear within 5 miles are charmed by the false hydra until the song ends. While charmed by the false hydra, a target cannot see or hear the false hydra, and all memories of its presence are suppressed as if the false hydra had never existed. Any resulting gaps in logic are confabulated by the target to preserve a logically consistent state of affairs. For example, if someone known to the target is killed by the false hydra, the target may believe that their deceased acquaintance has merely gone on a journey somewhere far away. During a long rest, a charmed creature makes a DC 20 Wisdom saving throw. If a creature’s saving throw is successful, their subconscious mind will reach out to them in an attempt to warn them of the false hydra’s presence, possibly in the form of a note scrawled as they slept or by some other means at the DM’s discretion. The false hydra must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the false hydra makes a bite attack.

```

---

```statblock
name: Mature False Hydra
size: Gargantuan
type: aberration
alignment: neutral evil
ac: 20 (natural armor)
hp: 214 (12d20 + 78)
hit_dice: 12d20
speed: 5 ft., burrow 5 ft.

stats: [30, 14, 22, 12, 28, 6]
saves:
  - STR: 15
  - CON: 11
  - WIS: 14
  - CHA: 3
skillsaves:
  - Perception: 14
damage_resistances: psychic
condition_immunities: petrified
senses: darkvision 120 ft., passive Perception 24
languages: Any language known by a creature it has consumed
cr: 16 (13,000 XP)
proficiency_bonus: +5

traits:
  - name: Death Throes (Mythic Trait; Recharges after a Short or Long Rest)
    desc: |
      When the false hydra is reduced to 0 hit points, it doesn’t die or fall unconscious immediately. Instead, it regains 214 hit points, then begins to wail and thrash about. It can no longer use its domination dirge. 24 hours after this trait becomes active, the false hydra dies.
  - name: Legendary Resistance (3/Day)
    desc: If the false hydra fails a saving throw, it can choose to succeed instead.
  - name: Multiple Heads
    desc: |
      The false hydra has seven heads. Whenever the false hydra takes a long rest, if it ate enough to gain proper sustenance during the day, it grows an additional head. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.
  - name: Neck Stalks
    desc: |
      The false hydra’s heads extend a long distance from its body. Whenever a head attacks a creature more than 15 ft. away from the body, the head provokes an attack of opportunity.
  - name: Reactive Heads
    desc: For each head the false hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.
  - name: Siege Monster
    desc: The false hydra deals double damage to objects and structures.

actions:
  - name: Multiattack
    desc: The false hydra makes any combination of bite or swallow attacks as it has heads.
  - name: Bite
    desc: |
      Melee Weapon Attack: +15 to hit, reach 120 ft., one creature.
      Hit: 15 (1d10 + 10) piercing damage and the target is grappled.
  - name: Swallow
    desc: |
      The false hydra makes one bite attack against a large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the false hydra, and it takes 35 (10d6) acid damage at the start of each of the false hydra’s turns. If a creature dies while inside the false hydra, the false hydra regains 4d6 hit points. If the false hydra takes 30 damage or more on a single turn from a creature inside it, the false hydra must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the false hydra. If the false hydra dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.
  - name: Domination Dirge
    desc: |
      The false hydra sings a howling dirge. All creatures that can hear within 5 miles must succeed on a DC 16 Wisdom saving throw or be charmed by the false hydra until the song ends. While charmed in this way, a creature has a telepathic link with the false hydra. The false hydra can use this telepathic link to issue commands to the creature while the false hydra is conscious (no action required), which the target does its best to obey. The false hydra can specify a simple and general course of action, such as “attack that creature,” “run over there,” or “fetch that object.” If the creature completes the order and doesn’t receive further direction from the false hydra, it defends and preserves itself to the best of its ability.
      The false hydra must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the false hydra makes a bite attack with all of its heads.

legendary_actions:
  - name: Bite
    desc: The false hydra makes a bite attack.
  - name: Command
    desc: The false hydra commands up to 6 creatures charmed by it to use an action. Those creatures use that action immediately.
  - name: Drag
    desc: The false hydra uses its head to drag itself 30 feet in any direction.

```

## Mythic Actions

If the false hydra’s mythic trait is active, it can use the options below as legendary actions for 1 hour after using Death Throes.
### Hateful Bellow.
The false hydra unleashes a piercing cry. All creatures within 5 miles that can hear must succeed on a DC 16 Wisdom saving throw or be paralyzed until the end of their next turn. 
### Voracious Consumption (Costs 2 Actions).
The false hydra makes as many bite attacks as it has heads. Any creature that is large or smaller hit by one of these attacks is also swallowed.
---
tags:
  - creature
---


```statblock
name: False Hydra
size: Small
type: aberration
subtype: -
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
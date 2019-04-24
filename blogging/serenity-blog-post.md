---
title: Serenity Blog Post
date: '2019-04-24'
description: The story of a unique drone I created during the 2019 Baltimore Hackathon.
thumbnail: /.vuepress/dist/serenity-presentation.jpg
---
So I won a hackathon again; this time it was the Sixth Baltimore Hackathon. 



The uninitiated a hackathon is:

> an event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming. It can be likened to a design sprint-like event in which computer programmers and others involved in software development, graphic design, interface design, project management, and others, often including domain experts, collaborate intensively on software & hardware projects.



This Hackathon had three tracks or categories: Civic, Software, & Hardware. I entered the Hardware track, because like I said in my last blog post I'm more of a Hardware guy than a Software guy. There weren’t many people in the hardware track, so, I knew may chances of winning were good. I did enter the hackathon with the idea of Serenity. I all of the major parts for it were ordered a few days before the hackathon. 



What is Serenity exactly; it is a quadrocopter with a flexible LED matrix attached its underside that’s used to relay short important messages.

[image of Serenity]



I call Serenity an Information Crowd Control Drone because the idea behind it is to fly over a crowd and display important information during an emergency. Serenity’s perfect use case would be at night festival where something happened that caused a crowd to become frantic and chaotic. In that situation, Serenity could act as waypoint or guide to an under utilize or safer exit, it could remind adults to look out for small children or fallen people, or it could to tell people that help is on the way and to remain calm.



I didn’t create Serenity all on my own. During the first day of the hackathon, I pitch around the idea of Serenity to other competitors in hopes of forming a team. The Baltimore Hackathons only allows teams of up to 5, and I only had myself up until the last minute of the first day. At that moment Owen, who I introduced myself to earlier that day, said he’d be interested in joining my team. The next day, me and Owen got to work.





Since the hackathons venue wasn’t really suited for hardware projects, we worked out of The Baltimore Node, a makerspace.



\[image of The Baltimore Node]





Owen was new to the world of hackathons, microcontrollers and electronics, but he was also eager to learn. The first problem he faced was figuring out where to start. Our first goal was to get the LED matrix up and running to just to test it out. We initially was going to us the ESP8266 but the one I had, broke. To complete the goal of test it out we use a regular Arduino Uno, but to keep the concept of sending messages to Serenity wirelessly, we had to look around the makespace to for a microcontroller with built-in wifi capabilities. We ended up finding two, the Particle Photon and Arduino Yun. We when with the Yun.



From that point on, we split up our task: I handled the modification of the drone, and Owen handled the programming. Since Owen was new to programming microcontrollers, I helped him out a bit by pointing him to useful libraries and tutorials. As he was working through the code, I was soldering, figuring out power management, wiring, and making leg extenders for the drone. The soldering was part of the wiring, I had to solder wires to the DC to DC step down converter. We were going to power up the v5 Yun, via a 12v output from the drone. The LED matrix would powered by a USB power bank. Most of this took place during the second day.



During the 3rd and final day, we were pressed to for time. We need to figure out how to send new messages to the LED matrix and test fly Serenity with all of the wiring. I test few Serenity with the leg extenders and LED matrix, on the second day. It flew then, but on the day we needed it we weren’t so lucky. I did have time to figure out weight distribution with all of the wiring. I also damaged the DC to DC power converters while rushing. So, we ended up needing two power banks, which also hindered the weight distribution. On the bright side, Owen managed to figure out how to send new messages to the LED matrix, the problem was that the Yun was stuck in an infinite loop. The solution was to simply put in a check for a new connection with the loop. He also built a decent web interface for sending a new message. In different colors too.



With drone not being able to fly we headed back down to the  hackathon’s venue and waited for judging. I felt we still had a good chance of winning because there was only two other hardware teams, one building a rail gun, the other 3D renderings of jewelry. Needless to say: our presentation went well, even with Serenity not fly, & we won, 1st place at that!  



Owen & I split the winnings. Owen really enjoyed writing short programs for the microcontroller. I still need to work on the weight distribution and cut down the wiring; I’m confident that Serenity will fly.

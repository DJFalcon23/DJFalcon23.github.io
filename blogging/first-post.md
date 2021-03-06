---
title: VR From A Microcontroller
date: 2018-07-28
description: A project on that uses a WiFi enabled microcontroller to serve a webVR experiance, that also has potencial to interact with physical world & vice versa.
	
---

# VR From A Microcontroller

In December of 2017, I came up with an idea of having a VR world stem from a microcontroller, the ESP8266. Around this time, Baltimore, my home city, was about to have it’s first Indie Web Camp, and I wanted to have a project to work on and show off. So, I started to brainstorm; “What would be cool, unique and interesting to me?” I wondered.

![NodeMCU](@alias/NodeMCU_Pinout.png)

*The pinout diagram of the NodeMCU, a ESP8266 based microcontroller board.*

I’m a hands-on guy, so, the project had to either have lots of visuals or involve something physical, because if it didn’t have those qualities, my interest level would be low and it would take me forever to complete. Metaphorically speaking, it had to be something that I could get off the ground fast! The ESP8266 would be a major part of the answer to my question. I knew that it could server up web pages, and with it being design for IoT, it could interact with the physical world via those web pages. “Cool”, I got that part down!

Now, what would make it …unique and interesting to me?”, …I still needed to answer that part. I looked around my room to gain inspiration. My eyes locked on to a couple of Google Cardboards that I had laying in one of the many boxes of electronic stuff that I have in my room. “Google Cardboard..., VR…, ESP8266… Cool, cool, leaning towards interesting! Now how the hell can I combined those things?...”, I wondered. “ ‘A-Frame’! BOOM!!!”, I could use A-Frame to glue the those things together.


![A-Frame’s Logo](@alias/aframe-logo.jpg)

Straight from A-Frame’s site:  

>*A-Frame is a web framework for building virtual reality (VR) experiences. Originally from [Mozilla](https://mozilla.org/), A-Frame was developed to be an easy but powerful way to develop VR content. [As an independent open source project](https://github.com/aframevr/), A-Frame has grown to be one of the [largest and most welcoming VR communities.](https://aframe.io/community)
A-Frame is based on top of HTML, making it simple to get started. But A-Frame is not just a 3D scene graph or a markup language; the core is a powerful entity-component framework that provides a declarative, extensible, and composable structure to [three.js.](https://threejs.org/) 


>A-Frame supports most VR headsets such as Vive, Rift, Daydream, GearVR, Cardboard, and can even be used for augmented reality. Although A-Frame supports the whole spectrum, A-Frame aims to define fully immersive interactive VR experiences that go beyond basic 360° content, making full use of positional tracking and controllers.*


I had the main ingredients, now I had to make something out of them. The first step was to put the ESP8266 in access point and web server mode. I could now write the HTML that contains the A-Frame VR world and put it on the microcontroller. To do all of this I looked up some tutorials on YouTube, and looked up some documentation. What I found was:

[![ESP8266 Web Sever tutorial](https://img.youtube.com/vi/Q0eUoFIXrWE/0.jpg)](https://www.youtube.com/watch?v=Q0eUoFIXrWE "ESP8266 Web Sever tutorial")

*‘ESP8266 WiFi Access Point Examples with the Arduino IDE’ By David Watts*

---

*and the documentation I found:* 


>## [Server - ESP8266 Arduino Core 2.4.0 documentation](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/server-examples.html)
  
>[Setting up web a server on ESP8266 requires very little code and is surprisingly straightforward. This is thanks to…arduino-esp8266.readthedocs.io](https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/server-examples.html)


---

In the description of the video, David Watts (the creator of the video), puts a link to a tool that he created that coverts HTML code in to a string. That saved me a ton of time and frustration. Thanks, David! The tool, also, allows you to designate spaces where you would want to place a variable.

At this point, I could call the project a success, but there was no fun to be had at its current stage. The fun would be in those designated spaces for the variables, …with a little bit of Ajax thrown in. My idea is to connect sensors to the ESP8266 and use their data to change or manipulate something in the virtual world. I could use light sensors to change the lighting in the virtual world. I could use an accelerometer and a compass to shake and rotate it. Of course, the reverse is true too, …well the ESP8266 doesn’t have the power shake the Earth but with a few other components, like a servo, perhaps, it could shake a rock.

#### This project has a lot of potential in how we can interact and use virtual spaces. It has me excited to explore more! Maybe I’ll write a part two.
    
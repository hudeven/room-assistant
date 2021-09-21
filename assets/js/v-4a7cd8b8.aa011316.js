"use strict";(self.webpackChunkroom_assistant=self.webpackChunkroom_assistant||[]).push([[670],{5119:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-4a7cd8b8",path:"/integrations/grid-eye.html",title:"Grid-EYE",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[{level:3,title:"Running with NodeJS",slug:"running-with-nodejs",children:[]},{level:3,title:"Running with Docker",slug:"running-with-docker",children:[]},{level:3,title:"Running with Home Assistant OS",slug:"running-with-home-assistant-os",children:[]}]},{level:2,title:"Sensor placement",slug:"sensor-placement",children:[]},{level:2,title:"Settings",slug:"settings",children:[{level:3,title:"Heatmap",slug:"heatmap",children:[]}]}],filePathRelative:"integrations/grid-eye.md",git:{updatedTime:1632254986e3,contributors:[{name:"Heiko Rothe",email:"me@heikorothe.com",commits:1}]}}},4398:(e,n,a)=>{a.r(n),a.d(n,{default:()=>C});var s=a(6252);const t=(0,s._)("h1",{id:"grid-eye",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#grid-eye","aria-hidden":"true"},"#"),(0,s.Uk)(" Grid-EYE")],-1),r=(0,s._)("p",null,[(0,s._)("strong",null,"Integration Key:"),(0,s.Uk)(),(0,s._)("code",null,"gridEye")],-1),o=(0,s.Uk)("The Grid-EYE sensor by Panasonic is a thermopile sensor that can be used to measure a 8x8 matrix of temperatures in front of its lense. This data can be used to detect human presence in the room, even if the person is stationary. This is done by analyzing the temperature readings for localized peaks, i.e. certain spots have a notably higher temperature than the rest. SparkFun sells a "),i={href:"https://www.sparkfun.com/products/14607",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("version of the sensor"),d=(0,s.Uk)(" that can be easily connected to Linux boards and will also work with this component."),p=(0,s._)("p",null,"This integration will provide a sensor that contains a count of people in the room. It also includes their coordinates (relative to the sensor view) in the sensor attributes.",-1),c=(0,s._)("h2",{id:"requirements",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),(0,s.Uk)(" Requirements")],-1),u=(0,s._)("p",null,[(0,s.Uk)("The sensor needs to be connected to the I"),(0,s._)("sup",null,"2"),(0,s.Uk)("C pins on your machine.")],-1),h=(0,s._)("h3",{id:"running-with-nodejs",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#running-with-nodejs","aria-hidden":"true"},"#"),(0,s.Uk)(" Running with NodeJS")],-1),m=(0,s.Uk)("To enable heatmap generation you may be required to install some "),b={href:"https://github.com/Automattic/node-canvas#compiling",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("additional system packages"),g=(0,s.Uk)(" for compilation:"),f=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev\n<span class="token function">sudo</span> <span class="token function">npm</span> i --global --unsafe-perm room-assistant\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>For Raspberry Pi devices the I<sup>2</sup>C interface also needs to be enabled using <code>sudo raspi-config</code> and then enabling the I<sup>2</sup>C option under Advanced Options.</p><h3 id="running-with-docker" tabindex="-1"><a class="header-anchor" href="#running-with-docker" aria-hidden="true">#</a> Running with Docker</h3><p>Your i2c device needs to be enabled on the host and mapped into the container as a device like shown below.</p><details class="custom-container details"><summary>Example docker-compose.yml</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">room-assistant</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> mkerix/room<span class="token punctuation">-</span>assistant\n    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /var/run/dbus<span class="token punctuation">:</span>/var/run/dbus\n    <span class="token key atrule">devices</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /dev/i2c<span class="token punctuation">-</span><span class="token number">1</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">NODE_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">&gt;</span><span class="token scalar string">\n        {\n          &quot;global&quot;: {\n            &quot;instanceName&quot;: &quot;changeme&quot;,\n            &quot;integrations&quot;: [&quot;gridEye&quot;]\n          }\n        }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><h3 id="running-with-home-assistant-os" tabindex="-1"><a class="header-anchor" href="#running-with-home-assistant-os" aria-hidden="true">#</a> Running with Home Assistant OS</h3>',6),y=(0,s.Uk)("You will need to enable the i2c interface by following the "),v={href:"https://www.home-assistant.io/hassio/enable_i2c/",target:"_blank",rel:"noopener noreferrer"},w=(0,s.Uk)("official Home Assistant OS guide"),x=(0,s.Uk)(". The "),_=(0,s._)("code",null,"config.txt",-1),T=(0,s.Uk)(" file that you create should also contain an additional option, leading to the following contents:"),U=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dtparam=i2c1=on\ndtparam=i2c_arm=on\ndtparam=i2c_baudrate=10000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Reboot after you imported your config in the supervisor.</p><h2 id="sensor-placement" tabindex="-1"><a class="header-anchor" href="#sensor-placement" aria-hidden="true">#</a> Sensor placement</h2><p>When placing your sensor you need to consider a few factors to get reliable results:</p><ul><li>Don&#39;t face the sensor towards a source of heat that is less than 5 meters away, for example radiators or windows.</li><li>Make sure the sensor has a clear view of all areas that you want to track.</li><li>Consider the range of the sensor, the further away people are the harder it will be to reliably detect them.</li><li>Consider the field of view as stated in the datasheet.</li></ul><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>busNumber</code></td><td>Number</td><td><code>1</code></td><td>I<sup>2</sup>C bus number of your machine that the sensor is connected to.</td></tr><tr><td><code>address</code></td><td>Number</td><td><code>0x69</code></td><td>I<sup>2</sup>C address of the D6T sensor that you want to use.</td></tr><tr><td><code>deltaThreshold</code></td><td>Number</td><td><code>2</code></td><td>Minimum temperature difference between average and single temperature pixel in °C for it to be considered as human presence. Increase if you are seeing false positives, decrease if you are seeing false negatives.</td></tr><tr><td><code>maskZeroBasedValues</code></td><td>Boolean</td><td><code>false</code></td><td>Mask values &lt; 1 that are incorrectly reported, replacing with nearest valid value or mean of grid for first pixel.</td></tr><tr><td><code>heatmap</code></td><td><a href="#heatmap">Heatmap</a></td><td></td><td>A number of options for configuring the heatmap output.</td></tr></tbody></table><h3 id="heatmap" tabindex="-1"><a class="header-anchor" href="#heatmap" aria-hidden="true">#</a> Heatmap</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>enabled</code></td><td>Boolean</td><td><code>true</code></td><td>Whether the heatmap generation should be enabled or not. Turn this off if you notice very high CPU usage.</td></tr><tr><td><code>minTemperature</code></td><td>Number</td><td><code>16</code></td><td>Temperature that will be considered the lower bound for the color scale in °C.</td></tr><tr><td><code>maxTemperature</code></td><td>Number</td><td><code>30</code></td><td>Temperature that will be considered the upper bound for the color scale in °C.</td></tr><tr><td><code>rotation</code></td><td>Number</td><td><code>0</code></td><td>The amount of degrees that the heatmap output image should be rotated. Only <code>0</code>, <code>90</code>, <code>180</code> or <code>270</code> are supported as values.</td></tr><tr><td><code>drawTemperatures</code></td><td>Boolean</td><td><code>true</code></td><td>Whether the actual temperature values should be drawn on the heatmap or not.</td></tr></tbody></table><details class="custom-container details"><summary>Example Config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>\n  <span class="token key atrule">integrations</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> gridEye\n<span class="token key atrule">gridEye</span><span class="token punctuation">:</span>\n  <span class="token key atrule">deltaThreshold</span><span class="token punctuation">:</span> <span class="token number">2</span>\n  <span class="token key atrule">heatmap</span><span class="token punctuation">:</span>\n    <span class="token key atrule">minTemperature</span><span class="token punctuation">:</span> <span class="token number">16</span>\n    <span class="token key atrule">maxTemperature</span><span class="token punctuation">:</span> <span class="token number">30</span>\n    <span class="token key atrule">rotation</span><span class="token punctuation">:</span> <span class="token number">180</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></details>',10),q={},C=(0,a(3744).Z)(q,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,r,(0,s._)("p",null,[o,(0,s._)("a",i,[l,(0,s.Wm)(a)]),d]),p,c,u,h,(0,s._)("p",null,[m,(0,s._)("a",b,[k,(0,s.Wm)(a)]),g]),f,(0,s._)("p",null,[y,(0,s._)("a",v,[w,(0,s.Wm)(a)]),x,_,T]),U],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);
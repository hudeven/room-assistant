"use strict";(self.webpackChunkroom_assistant=self.webpackChunkroom_assistant||[]).push([[980],{6856:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-4f4ccb8f",path:"/guide/configuration.html",title:"Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Configuring with Docker",slug:"configuring-with-docker",children:[]},{level:2,title:"Core Settings",slug:"core-settings",children:[]}],filePathRelative:"guide/configuration.md",git:{updatedTime:1632254986e3,contributors:[{name:"Heiko Rothe",email:"me@heikorothe.com",commits:1}]}}},3179:(n,e,a)=>{a.r(e),a.d(e,{default:()=>D});var s=a(6252);const t=(0,s._)("h1",{id:"configuration",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),(0,s.Uk)(" Configuration")],-1),o=(0,s.Uk)("room-assistant can be configured using YAML and JSON files. It will look for them in the "),i=(0,s._)("code",null,"config",-1),r=(0,s.Uk)(" subdirectory of the current working directory. The files in the config folder are loaded according to a "),l={href:"https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("specific order"),u=(0,s.Uk)(" and then merged into a single configuration. In most cases you should only need a single file called "),p=(0,s._)("code",null,"local.yml",-1),d=(0,s.Uk)(" or "),m=(0,s._)("code",null,"local.json",-1),h=(0,s.Uk)(" in the config folder though."),g=(0,s._)("p",null,[(0,s.Uk)("For example, let's say you are launching room-assistant from the directory "),(0,s._)("code",null,"/home/pi/room-assistant"),(0,s.Uk)(". In this case you should create a file "),(0,s._)("code",null,"/home/pi/room-assistant/config/local.yml"),(0,s.Uk)(" and put your configuration in there.")],-1),k=(0,s.Uk)("You can find the global configuration options below and the ones specific to some integrations on their "),b=(0,s.Uk)("respective pages"),f=(0,s.Uk)("."),y=(0,s._)("div",{class:"custom-container tip"},[(0,s._)("p",{class:"custom-container-title"},"TIP"),(0,s._)("p",null,[(0,s.Uk)("Having trouble with your configuration? You can launch room-assistant with the "),(0,s._)("code",null,"--verbose"),(0,s.Uk)(" flag to get more detailed debug logging, which might give you an idea what went wrong.")])],-1),v=(0,s._)("h2",{id:"configuring-with-docker",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#configuring-with-docker","aria-hidden":"true"},"#"),(0,s.Uk)(" Configuring with Docker")],-1),_=(0,s.Uk)("The official "),w={href:"https://hub.docker.com/r/mkerix/room-assistant/",target:"_blank",rel:"noopener noreferrer"},U=(0,s.Uk)("Docker image"),C=(0,s.Uk)(" can be configured in two different ways. You can either mount your local config folder into the container as "),q=(0,s._)("code",null,"/room-assistant/config",-1),x=(0,s.Uk)(" or you can provide the configuration as JSON through an environment variable."),N=(0,s.uE)('<details class="custom-container details"><summary>Example docker-compose.yml</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">room-assistant</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> mkerix/room<span class="token punctuation">-</span>assistant\n    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> host\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /var/run/dbus<span class="token punctuation">:</span>/var/run/dbus\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">NODE_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">&gt;</span><span class="token scalar string">\n        {\n          &quot;global&quot;: {\n            &quot;instanceName&quot;: &quot;living-room&quot;,\n            &quot;integrations&quot;: [&quot;homeAssistant&quot;, &quot;bluetoothClassic&quot;]\n          }\n        }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="core-settings" tabindex="-1"><a class="header-anchor" href="#core-settings" aria-hidden="true">#</a> Core Settings</h2><p><strong>Config Key:</strong> <code>global</code></p><p>room-assistant exposes a few settings that affect the overall behavior of the application.</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>instanceName</code></td><td>String</td><td>Hostname</td><td>The name of the room-assistant instance. May be used as state for some sensors. Put something in</td></tr><tr><td><code>integrations</code></td><td>Array</td><td></td><td>The integrations that should be loaded on this instance, denoted as camelCase.</td></tr><tr><td><code>apiPort</code></td><td>Number</td><td><code>6415</code></td><td>The port that the REST API should be available on.</td></tr></tbody></table><details class="custom-container details"><summary>Example Config</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>\n  <span class="token key atrule">instanceName</span><span class="token punctuation">:</span> bedroom\n  <span class="token key atrule">integrations</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> bluetoothLowEnergy\n    <span class="token punctuation">-</span> homeAssistant\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>',6),T={},D=(0,a(3744).Z)(T,[["render",function(n,e){const a=(0,s.up)("OutboundLink"),T=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[o,i,r,(0,s._)("a",l,[c,(0,s.Wm)(a)]),u,p,d,m,h]),g,(0,s._)("p",null,[k,(0,s.Wm)(T,{to:"/integrations/"},{default:(0,s.w5)((()=>[b])),_:1}),f]),y,v,(0,s._)("p",null,[_,(0,s._)("a",w,[U,(0,s.Wm)(a)]),C,q,x]),N],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[a,s]of e)n[a]=s;return n}}}]);
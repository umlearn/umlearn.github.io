//	HYPE.documents["dragtoverify"]

(function(){(function l(){function h(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(l),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=k,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(l),c=!0);return c}var k="dragtoverify.hyperesources",c="dragtoverify",e="dragtoverify_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/dragtoverify_hype_generated_script.js"):-1;if(-1!=d){k=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=h("HYPE_636","HYPE_dtl_636",!0==(true==!0||null!=a&&10>a)?"HYPE-636.full.min.js":"HYPE-636.thin.min.js"),false==!0&&(a=a||h("HYPE_w_636","HYPE_wdtl_636","HYPE-636.waypoints.min.js")),
false==!0&&(a=a||h("Matter","HYPE_pdtl_636","HYPE-636.physics.min.js")),a))return;f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"hit2",source:"function(hypeDocument, element, event) {\nif (event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseEnd) {\n\nvar currentTop  = hypeDocument.getElementProperty(element, 'top');\nvar currentLeft = hypeDocument.getElementProperty(element, 'left');\nvar currentBottom = hypeDocument.getElementProperty(element, 'top') + hypeDocument.getElementProperty(element, 'height');\nvar currentRight = hypeDocument.getElementProperty(element, 'left') + hypeDocument.getElementProperty(element, 'width');\n\nvar dropZone = hypeDocument.getElementById(\"dropZone\");\nvar sperre = hypeDocument.getElementById(\"sperre\");\n\nvar dropZoneTop = hypeDocument.getElementProperty(dropZone, 'top');\nvar dropZoneBottom = hypeDocument.getElementProperty(dropZone, 'top') + hypeDocument.getElementProperty(dropZone, 'height');\n\nvar dropZoneLeft = hypeDocument.getElementProperty(dropZone, 'left');\nvar dropZoneRight = hypeDocument.getElementProperty(dropZone, 'left') + hypeDocument.getElementProperty(dropZone, 'width');\n\nvar hit1 = (dropZoneBottom > currentTop) && (dropZoneTop < currentBottom) && (dropZoneLeft < currentLeft) && (dropZoneRight > currentLeft);\nvar hit2 = (dropZoneBottom > currentTop) && (dropZoneTop < currentBottom) && (dropZoneLeft < currentRight) && (dropZoneLeft > currentLeft);\n\n\nif (hit1 || hit2) {\n\thypeDocument.startTimelineNamed('hit', hypeDocument.kDirectionForward);\n\t    \n\n}\telse {\nhypeDocument.startTimelineNamed('returnDrag', hypeDocument.kDirectionForward)\n\n}\n\n\n}\n\n\n\t\n\n}",identifier:"37"},{name:"returnDrag",source:"function(hypeDocument, element, event) {\t\n\tif (event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseEnd) {\nhypeDocument.startTimelineNamed('returnDrag', hypeDocument.kDirectionForward)\n}\n}",identifier:"64"},{name:"hit",source:"function(hypeDocument, element, event) {\t\nvar currentTop  = hypeDocument.getElementProperty(element, 'top');\nvar currentLeft = hypeDocument.getElementProperty(element, 'left');\n\nvar dropZone = hypeDocument.getElementById(\"dropZone\");\n\nvar dropZoneTop = hypeDocument.getElementProperty(dropZone, 'top');\nvar dropZoneBottom = hypeDocument.getElementProperty(dropZone, 'top') + hypeDocument.getElementProperty(dropZone, 'height');\n\nvar dropZoneLeft = hypeDocument.getElementProperty(dropZone, 'left');\nvar dropZoneRight = hypeDocument.getElementProperty(dropZone, 'left') + hypeDocument.getElementProperty(dropZone, 'width');\n\nvar hit = (currentTop > dropZoneTop) && (currentTop < dropZoneBottom) && (currentLeft < dropZoneRight) && (currentLeft > dropZoneLeft);\nif (hit) {\n\thypeDocument.startTimelineNamed('hit', hypeDocument.kDirectionForward);\n\n}\telse {\nhypeDocument.startTimelineNamed('returnDrag', hypeDocument.kDirectionForward)\n\n}\n\t\n\t\n}",identifier:"65"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,
d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=function(){}}a=new HYPE_636(c,e,{"3":{p:1,n:"logo-wite_2x.png",g:"10",t:"@2x"},"-2":{n:"blank.gif"},"4":{p:1,n:"PastedVector-1.svg",g:"52",t:"image/svg+xml"},"0":{p:1,n:"logo-dark.png",g:"9",t:"@1x"},"5":{p:1,n:"PastedVector.svg",g:"50",t:"image/svg+xml"},"1":{p:1,n:"logo-dark_2x.png",g:"9",t:"@2x"},"-1":{n:"PIE.htc"},"2":{p:1,n:"logo-wite.png",g:"10",t:"@1x"}},k,[],d,[{n:"\u9996\u9875",o:"1",X:[0]},{n:"\u8df3\u8f6c\u9875\u9762",o:"66",X:[1]}],[{o:"3",p:"600px",a:100,Y:375,Z:667,b:100,cA:false,c:"#F5F5F5",L:[],bY:1,d:375,U:{"105":{V:{"3":"119","1":"120","Main Timeline":"117","2":"118"},W:"117",n:"Radiodark"},"112":{V:{"3":"123","1":"124","Main Timeline":"121","2":"122"},W:"121",n:"RadioLight"}},T:{"95":{q:false,z:0.09,i:"95",n:"texeBlink",a:[{f:"c",y:0,z:0.09,i:"e",e:0.2370945411392405,s:1,o:"103"},{f:"c",p:2,y:0,z:0.09,i:"ActionHandler",e:{a:[{b:"95",p:8,z:true,symbolOid:"2",J:false}]},s:{a:[{b:"95",p:3,z:false,symbolOid:"2"}]},o:"95"},{f:"c",p:2,y:0.09,z:0,i:"ActionHandler",s:{a:[{b:"95",p:8,z:true,symbolOid:"2",J:false}]},o:"95"},{y:0.09,i:"e",s:0.2370945411392405,z:0,o:"103",f:"c"}],f:30,b:[]},"15":{q:false,z:1,i:"15",n:"returnDrag",a:[{f:"c",y:0,z:0.18,i:"a",e:49,r:true,s:49,o:"111"},{f:"c",y:0,z:0.18,i:"b",e:127,r:true,s:127,o:"111"},{y:0.18,i:"b",s:127,z:0,o:"111",f:"c"},{y:0.18,i:"a",s:49,z:0,o:"111",f:"c"}],f:30,b:[{D:1,H:true,E:true,z:false,F:0,G:0,C:0,b:"121"}]},"123":{c:"112",q:false,z:1,i:"123",a:[{f:"c",y:0,z:1,i:"d",e:139,s:61,o:"114"},{f:"c",y:0,z:0.1,i:"e",e:0.98002373417721522,s:0,o:"114"},{f:"c",y:0,z:1,i:"b",e:-39,s:-1.5,o:"114"},{f:"c",y:0,z:1,i:"c",e:139,s:61,o:"114"},{f:"c",y:0,z:1,i:"a",e:-39,s:-1.5,o:"114"},{f:"c",y:0.1,z:0.2,i:"e",e:0,s:0.98002373417721522,o:"114"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{b:"123",p:3,z:false,symbolOid:"16"}]},o:"123"},{y:1,i:"d",s:139,z:0,o:"114",f:"c"},{y:1,i:"a",s:-39,z:0,o:"114",f:"c"},{y:1,i:"b",s:-39,z:0,o:"114",f:"c"},{y:1,i:"c",s:139,z:0,o:"114",f:"c"},{y:1,i:"e",s:0,z:0,o:"114",f:"c"}],n:"3",f:30,b:[]},"117":{c:"105",q:false,z:0,i:"117",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"120",p:3,z:false,symbolOid:"16"}]},o:"117"}],n:"Main Timeline",f:30,b:[]},"121":{c:"112",q:false,z:1,i:"121",a:[{f:"c",p:2,y:0,z:0.15,i:"ActionHandler",e:{a:[{b:"22",p:3,z:false,symbolOid:"16"}]},s:{a:[{b:"124",p:3,z:false,symbolOid:"16"}]},o:"121"},{f:"c",p:2,y:0.15,z:0.15,i:"ActionHandler",e:{a:[{b:"24",p:3,z:false,symbolOid:"16"}]},s:{a:[{b:"122",p:3,z:false,symbolOid:"16"}]},o:"121"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{b:"123",p:3,z:false,symbolOid:"16"}]},o:"121"}],n:"Main Timeline",f:30,b:[]},"54":{q:false,z:2,i:"54",n:"hit",a:[{f:"c",y:0,z:0.04,i:"e",e:0,r:true,s:1,o:"104"},{f:"92",y:0,z:0.15,i:"a",e:140,r:true,s:49,o:"111"},{f:"92",y:0,z:0.15,i:"b",e:239,r:true,s:127,o:"111"},{f:"c",y:0,z:0.15,i:"c",e:112,r:true,s:58,o:"116"},{f:"c",y:0,z:0.15,i:"d",e:111,r:true,s:57,o:"116"},{f:"c",y:0,z:0.04,i:"cY",e:"1",r:true,s:"0",o:"112"},{f:"c",y:0,z:0.04,i:"w",e:"\u9a8c\u8bc1\u6210\u529f\uff0c\u8df3\u8f6c\u4e2d...",r:true,s:"\u62d6\u52a8\u4f7f\u56fe\u6807\u91cd\u5408<br>",o:"103"},{f:"c",y:0,z:0.15,i:"T",e:0,r:true,s:5,o:"116"},{f:"c",y:0,z:0.15,i:"Q",e:0,r:true,s:3,o:"116"},{f:"c",p:2,y:0,z:2,i:"ActionHandler",e:{a:[{d:0.29999999999999999,p:1,g:4,e:"66"}]},s:{a:[{b:"95",p:3,z:false,symbolOid:"2"}]},o:"54"},{f:"c",y:0,z:0.15,i:"a",e:-9,r:true,s:20,o:"116"},{f:"c",y:0,z:0.15,i:"b",e:-9,r:true,s:19,o:"116"},{y:0.04,i:"e",s:0,z:0,o:"104",f:"c"},{y:0.04,i:"cY",s:"1",z:0,o:"112",f:"c"},{y:0.04,i:"w",s:"\u9a8c\u8bc1\u6210\u529f\uff0c\u8df3\u8f6c\u4e2d...",z:0,o:"103",f:"c"},{y:0.15,i:"c",s:112,z:0,o:"116",f:"c"},{y:0.15,i:"d",s:111,z:0,o:"116",f:"c"},{y:0.15,i:"T",s:0,z:0,o:"116",f:"c"},{y:0.15,i:"Q",s:0,z:0,o:"116",f:"c"},{y:0.15,i:"a",s:140,z:0,o:"111",f:"c"},{y:0.15,i:"b",s:239,z:0,o:"111",f:"c"},{y:0.15,i:"a",s:-9,z:0,o:"116",f:"c"},{y:0.15,i:"b",s:-9,z:0,o:"116",f:"c"},{f:"c",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{d:0.29999999999999999,p:1,g:4,e:"66"}]},o:"54"}],f:30,b:[]},"118":{c:"105",q:false,z:1,i:"118",a:[{f:"c",y:0,z:1,i:"c",e:61,s:139,o:"107"},{f:"c",y:0,z:1,i:"b",e:0,s:-39,o:"107"},{f:"c",y:0,z:0.21,i:"e",e:0.98002373417721522,s:0,o:"107"},{f:"c",y:0,z:1,i:"a",e:0,s:-39,o:"107"},{f:"c",y:0,z:1,i:"d",e:61,s:139,o:"107"},{f:"c",y:0.21,z:0.09,i:"e",e:0,s:0.98002373417721522,o:"107"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{b:"118",p:3,z:false,symbolOid:"16"}]},o:"118"},{y:1,i:"a",s:0,z:0,o:"107",f:"c"},{y:1,i:"b",s:0,z:0,o:"107",f:"c"},{y:1,i:"d",s:61,z:0,o:"107",f:"c"},{y:1,i:"c",s:61,z:0,o:"107",f:"c"},{y:1,i:"e",s:0,z:0,o:"107",f:"c"}],n:"2",f:30,b:[]},"124":{c:"112",q:false,z:1,i:"124",a:[{f:"c",y:0,z:1,i:"d",e:139,s:61,o:"115"},{f:"c",y:0,z:0.1,i:"e",e:0.98002373417721522,s:0,o:"115"},{f:"c",y:0,z:1,i:"b",e:-40,s:-1,o:"115"},{f:"c",y:0,z:1,i:"c",e:139,s:61,o:"115"},{f:"c",y:0,z:1,i:"a",e:-40,s:-1,o:"115"},{f:"c",y:0.1,z:0.2,i:"e",e:0,s:0.98002373417721522,o:"115"},{y:1,i:"d",s:139,z:0,o:"115",f:"c"},{y:1,i:"a",s:-40,z:0,o:"115",f:"c"},{y:1,i:"b",s:-40,z:0,o:"115",f:"c"},{y:1,i:"c",s:139,z:0,o:"115",f:"c"},{y:1,i:"e",s:0,z:0,o:"115",f:"c"}],n:"1",f:30,b:[]},"122":{c:"112",q:false,z:1,i:"122",a:[{f:"c",y:0,z:1,i:"d",e:139,s:61,o:"113"},{f:"c",y:0,z:0.1,i:"e",e:0.98002373417721522,s:0,o:"113"},{f:"c",y:0,z:1,i:"b",e:-40,s:-1,o:"113"},{f:"c",y:0,z:1,i:"c",e:139,s:61,o:"113"},{f:"c",y:0,z:1,i:"a",e:-40,s:-1,o:"113"},{f:"c",y:0.1,z:0.2,i:"e",e:0,s:0.98002373417721522,o:"113"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{b:"122",p:3,z:false,symbolOid:"16"}]},o:"122"},{y:1,i:"d",s:139,z:0,o:"113",f:"c"},{y:1,i:"a",s:-40,z:0,o:"113",f:"c"},{y:1,i:"b",s:-40,z:0,o:"113",f:"c"},{y:1,i:"c",s:139,z:0,o:"113",f:"c"},{y:1,i:"e",s:0,z:0,o:"113",f:"c"}],n:"2",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[{D:1,H:true,E:true,z:false,F:0,G:0,C:0,b:"121"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"117"}]},"119":{c:"105",q:false,z:1,i:"119",a:[{f:"c",y:0,z:1,i:"d",e:61,s:139,o:"108"},{f:"c",y:0,z:1,i:"a",e:0,s:-39,o:"108"},{f:"c",y:0,z:1,i:"b",e:0,s:-39,o:"108"},{f:"c",y:0,z:1,i:"c",e:61,s:139,o:"108"},{f:"c",y:0,z:0.2,i:"e",e:0.98002373417721522,s:0,o:"108"},{f:"c",y:0.2,z:0.1,i:"e",e:0,s:0.98002373417721522,o:"108"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{b:"119",p:3,z:false,symbolOid:"16"}]},o:"119"},{y:1,i:"b",s:0,z:0,o:"108",f:"c"},{y:1,i:"a",s:0,z:0,o:"108",f:"c"},{y:1,i:"d",s:61,z:0,o:"108",f:"c"},{y:1,i:"c",s:61,z:0,o:"108",f:"c"},{y:1,i:"e",s:0,z:0,o:"108",f:"c"}],n:"3",f:30,b:[]},"120":{c:"105",q:false,z:1,i:"120",a:[{f:"c",y:0,z:0.21,i:"e",e:0.98002373417721522,s:0,o:"106"},{f:"c",y:0,z:1,i:"d",e:61,s:139,o:"106"},{f:"c",y:0,z:1,i:"a",e:0,s:-39,o:"106"},{f:"c",y:0,z:1,i:"b",e:0,s:-39,o:"106"},{f:"c",y:0,z:1,i:"c",e:61,s:139,o:"106"},{f:"c",y:0.21,z:0.09,i:"e",e:0,s:0.98002373417721522,o:"106"},{f:"c",p:2,y:1,z:0,i:"ActionHandler",s:{a:[{b:"120",p:3,z:false,symbolOid:"27"}]},o:"120"},{y:1,i:"d",s:61,z:0,o:"106",f:"c"},{y:1,i:"a",s:0,z:0,o:"106",f:"c"},{y:1,i:"b",s:0,z:0,o:"106",f:"c"},{y:1,i:"c",s:61,z:0,o:"106",f:"c"},{y:1,i:"e",s:0,z:0,o:"106",f:"c"}],n:"1",f:30,b:[]}},bZ:180,O:["110","111","115","113","114","112","116","106","104","109","108","107","105","103"],n:"Untitled Layout","_":0,v:{"114":{c:61,d:61,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,bF:"112",N:1,A:"#2396FF",x:"visible",j:"absolute",B:"#2396FF",O:1,P:1,C:"#2396FF",z:2,aJ:"50%",D:"#2396FF",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:0},"103":{aU:8,G:"#5E5E5E",c:359,bS:13,aV:8,r:"inline",d:22,e:1,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",t:20,Z:"break-word",v:"bold",w:"\u62d6\u52a8\u4f7f\u56fe\u6807\u91cd\u5408<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:0,F:"center",b:591},"112":{x:"visible",a:18,cA:false,b:16,j:"absolute",bF:"111",c:63,k:"div",bY:1,d:63,z:1,cY:"0",e:0.31071993670886078,bZ:180,bX:false,cV:[]},"106":{c:61,d:61,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,bF:"105",N:1,A:"#0079EE",x:"visible",j:"absolute",B:"#0079EE",O:1,P:1,C:"#0079EE",z:2,aJ:"50%",D:"#0079EE",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:0},"109":{h:"52",p:"no-repeat",x:"visible",a:18,q:"100% 100%",b:18,j:"absolute",r:"inline",z:2,bF:"104",dB:"img",d:58,k:"div",c:58,e:0.29197982594936711},"104":{x:"visible",k:"div",c:94,d:94,z:11,i:"dropZone",e:1,a:221,bS:45,j:"absolute",b:381},"110":{k:"div",c:352,bS:63,d:545,I:"None",J:"None",gg:"0",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:4,j:"absolute",x:"visible",O:0,B:"#2396FF",P:0,A:"#2396FF",C:"#2396FF",z:10,Q:2,D:"#2396FF",R:"rgba(0, 0, 0, 0.068)",aK:4,aJ:4,S:0,a:12,aL:4,T:2,b:11},"115":{c:61,d:61,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,bF:"112",N:1,A:"#2396FF",x:"visible",j:"absolute",B:"#2396FF",O:1,P:1,C:"#2396FF",z:4,aJ:"50%",D:"#2396FF",aK:"50%",k:"div",aI:"50%",a:-1,aL:"50%",b:-1},"107":{c:61,d:61,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,bF:"105",N:1,A:"#FFFFFF",x:"visible",j:"absolute",B:"#FFFFFF",O:1,P:1,C:"#FFFFFF",z:3,aJ:"50%",D:"#FFFFFF",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:0},"113":{c:61,d:61,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,bF:"112",N:1,A:"#2396FF",x:"visible",j:"absolute",B:"#2396FF",O:1,P:1,C:"#2396FF",z:3,aJ:"50%",D:"#2396FF",aK:"50%",k:"div",aI:"50%",a:-1,aL:"50%",b:-1},"116":{p:"no-repeat",c:58,q:"100% 100%",d:57,r:"inline",bL:0,gg:"1",h:"50",bF:"111",j:"absolute",x:"visible",k:"div",dB:"img",z:3,Q:3,R:"rgba(0, 0, 0, 0.080)",S:0,a:20,T:5,b:19},"105":{x:"visible",a:15,cA:false,b:15,j:"absolute",bF:"104",c:63,k:"div",bY:1,d:63,z:1,bX:false,e:0.20000000000000001,bZ:180,cV:[]},"111":{Q:0,bN:{a:[{p:4,h:"37"},{p:11}]},x:"visible",bS:45,R:"#000000",b:127,j:"absolute",a:49,z:12,T:0,i:"drag",d:94,S:0,cQ:1,k:"div",c:94,aP:"move",cR:1,gg:"0"},"108":{c:61,d:61,I:"Solid",e:0,J:"Solid",K:"Solid",L:"Solid",M:1,bF:"105",N:1,A:"#FFFFFF",x:"visible",j:"absolute",B:"#FFFFFF",O:1,P:1,C:"#FFFFFF",z:4,aJ:"50%",D:"#FFFFFF",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:0}}},{o:"68",p:"600px",a:100,Y:375,Z:667,b:100,cA:false,c:"#00DF70",L:[],bY:1,d:375,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["125"],n:"Untitled Layout","_":1,v:{"125":{aU:8,G:"#000000",c:359,bS:45,aV:8,r:"inline",d:30,s:"system,-apple-system,'.SFNSDisplay-Regular','Helvetica Neue','Lucida Grande',Helvetica,Arial,Sans-Serif",t:18,Z:"break-word",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; text-align: center; font-style: normal; font-variant-caps: normal; font-stretch: normal; font-size: 24px; line-height: normal; color: rgb(255, 255, 255);\"><font><span style=\"letter-spacing: 0.800000011920929px;\"><b>\u8df3\u8f6c\u9875</b></span></font></p>",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:-1,b:310}}}],{},g,{"92":{p:0,q:[[0,0,0.1544,0,0.1973,1,1,1]]}},null,false,true,-1,true,true,
false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",c);a.z_o(this.body)})();})();
!function(t){function e(){var t=s.select(this);t=t.transition().duration(2e3).style("fill",g(5*Math.random()||0))}function a(){k.call(b.event);var t=b.center(),e=b.translate(),a=n(t);b.scale(b.scale()*Math.pow(2,+this.getAttribute("data-zoom")));var o=r(a);b.translate([e[0]+t[0]-o[0],e[1]+t[1]-o[1]]),k.transition().duration(750).call(b.event)}function n(t){var e=b.scale(),a=b.translate();return[(t[0]-a[0])/e,(t[1]-a[1])/e]}function r(t){var e=b.scale(),a=b.translate();return[t[0]*e+a[0],t[1]*e+a[1]]}function o(t){if(f.node()===this)return c();f.classed("active",!1),f=s.select(this).classed("active",!0);var e=w.bounds(t),a=e[1][0]-e[0][0],n=e[1][1]-e[0][1],r=(e[0][0]+e[1][0])/2,o=(e[0][1]+e[1][1])/2,i=.9/Math.max(a/p,n/h),l=[p/2-i*r,h/2-i*o];k.transition().duration(750).call(b.translate(l).scale(i).event)}function c(){f.classed("active",!1),f=s.select(null),k.transition().duration(750).call(b.translate([0,0]).scale(1).event)}function i(){console.log("zoomed"),z.style("stroke-width",1.5/s.event.scale+"px"),z.attr("transform","translate("+s.event.translate+")scale("+s.event.scale+")")}function l(){s.event.defaultPrevented&&s.event.stopPropagation()}var s=t.d3||{},d=t.topojson||{},u=document.querySelector(".map-container"),v=u.clientWidth,p=938,h=500,f=s.select(null),g=s.scale.ordinal().range(["#2196F3","#E53935","#43A047"]),m=s.geo.miller().scale(160).translate([p/2,h/1.5]),b=s.behavior.zoom().translate([0,0]).scale(1).center([p/2,h/2]).scaleExtent([1,8]).size([p,h]).on("zoom",i),w=s.geo.path().projection(m),k=s.select(".map-container").append("svg").attr("preserveAspectRatio","xMidYMid").attr("viewBox","0 0 "+p+" "+h).attr("width",v).attr("height",v*h/p).on("click",l,!0);k.append("rect").attr("class","background").attr("width",p).attr("height",h).on("click",c);var z=k.append("g");s.selectAll("button[data-zoom]").on("click",a),s.select("button[data-reset]").on("click",c),k.call(b).call(b.event),s.json("/public/data/countries-topo.json",function(t,a){if(t)return console.error(t);var n=d.feature(a,a.objects.countries).features;z.append("g").attr("id","countries").selectAll("path").data(n).enter().append("path").attr("id",function(t){return t.id}).attr("class",function(t){return"country code "+t.id}).attr("d",w).on("click",o).transition().duration(0).delay(function(t,e){return 5*e}).each(e)}),t.addEventListener("resize",function(){var t=u.clientWidth;k.attr("width",t),k.attr("height",t*h/p)})}(window);
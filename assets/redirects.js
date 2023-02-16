var newRedirects = [
  {"from": ["360050971771"],"to": "4406429578269"},
  {"from": ["6020370318365"],"to": "8595074429469"},
  {"from": ["6020594187549"],"to": "8637955941661"},
  {"from": ["360019244457"],"to": "4406429578269"},
  {"from": ["4406436488093"],"to": "360051052211"},
  {"from": ["5161970470941"],"to": "4406429578269"},
  {"from": ["360018542017"],"to": "9175663648925"},
  {"from": ["6434081936541", "6486686533149"],"to": "6739198496413"}
];

// Do not change
for (var i = 0; i < newRedirects.length; i++) {
  var j = newRedirects[i];

  for (var k = 0; k < j['from'].length; k++) {
      if (window.location.href.indexOf(j['from'][k]) > -1) {
          window.location.href = 'https://support.exclaimer.com/hc/en-gb/articles/' + j["to"]; 
      }
  }
}

 // Redirect to new KB
 var redirectstolegacy = [
  {"from": ["360004503131"],"to": "360004503131"}
 ];

 var oldkbIds = [
  "360004503131","360004265792","360004303391","360014021152","360028890072","360004471831","360004328412","360004419592","360004616071","360028885272","360004382171","360004356192","360004467191","360004466012","360029665592","360004512451","360013995872","360007142211","360016552032","360004514071","360004469392","360004469191","360028887472","360004472811","360004358092","360027260951","360018558612","360004564032","360034867092","360004415011","360004510971","360004413172","360027343632","360020409977","360010748232","360004464752","360004419032","360031273151","360004328732","360004416232","360012506451","360030006291","360004413792","360004516591","4404256054417","360004614411","360025262272","360004456852","360004505271","360004678992","360024742632","4403988790289","4403989000977","4403989043985","360004426651","360004265852","360027497172","4411853944721","360004414471","360004462211","360004473491","360004362192","360055860371","360004541811","360004412872","360004357312","360004467451","360004503651","360004466612","360004414171","360004473071","360055750192","360004410011","360004361212","360004473771","360004418192","360013652131","360028885452","360004464232","360004383071","360004511031","360004510811","360004411091","360004674772","360004468772","360004508731","360004382511","360030008271","360004467711","360027345612","360021106092","360004471771","360004411471","360004512591","360004513831","360007119871","360004319871","360004504511","360004467871","360004512691","360017405952","360004461652","360004266932","360004266912","360004565512","360004493292","360004466792","360029587271","360004542251","360029434371","360004411691","360004512891","360004382731","360004541291","360004469352","360004467091","360004356172","360004363632","360004417772","360004410351","360004307511","360004465972","360004469052","360004540491","360004466872","360030011591","360004513771","360004544291","360004516371","360004356952","360026121771","360004503072","360004457192","360027302571","360004358472","360004504231","360004328432","360024388151","360021115432","360021113732","360021888152","360028648572","360004265772","360004499672","360004565992","360004465372","360004265832","360004463712","360044101112","360004410491","360004489312","360004361512","360004416392","360052193431","360004463832","360004469492","360020592678","360048630971","360004419432","360018586691","360004615971","360004472271","360004465412","360019752111","360004467151","360004513111","360018306577","360004491332","360018931731","360004513871","360004419492","360004489192","360004469951","360004508271","360004415111","360004512751","360004490172","360004266892","360004565432","360004327732","360029682611","360004466531","360028197392","360027545072","360004382471","360030864671","360004288592","360004540611","360028492391","360023751552","360019250151","360004551831","360004544671","360004541431","360004327612","4403665130641","360004275152","360025766511","360004502571","360004358372","360004465792","360015554452","360004456232","360004544711","360004413971","360004502492","360004410811","360004357972","360004408592","360004503851","360030533512","360028492151","360004463932","360004455692","360004503971","360004502512","360022690171","360004473291","360004676332","360004676712","360004463872","360004468992","360004319071","360018680212","360004358352","360004619731","360004318791","360004426711","360004357572","360004322271","4434972491549","360027342812","360016551212","360004615051","360025598112","360004516291","360004412812","360029669712","360004463252","360004328392","360004470071","360004382911","360004464812","360004411511","360004383371","360004617491","360004414372","360004456172","360004357692","360004356332","360004469771","360004468732","360023359371","360004356692","360004456012","360004262672","360004419952","360004563172","360004462171","360004320351","360004462072","360004511231","360004358672","360004326872","360004361152","360004467551","360025041171","360021383332","360013774072","360004357752","360004356772","360004490792","360007141531","360030533252","360004307491","360004490312","360004491012","360004492272","360026889531","360004512631","360004551011","360004411131","360004542551","360004463371","360004411451","360004413512","360029369852","360004265412","360004361752","360024454972","360004381971","360002876012","360004265892","360004491772","360004466971","360004619631","360004461632","360004413652","360004416172","360004503951","360004382631","360004412632","360004374711","360004455472","360004493212","360004540251","360018940052","360004410671","360004318911","360004455832","360004357932","360004412732","360004469012"
 ];
 var newkbIds = [
  "360004503131","360004265792","360004303391","360014021152","360028890072","360004471831","360004328412","360004419592","360004616071","360028885272","360004382171","360004356192","360004467191","360004466012","360029665592","360004512451","360013995872","360007142211","360016552032","360004514071","360004469392","360004469191","360028887472","360004472811","360004358092","360027260951","360018558612","360004564032","360034867092","360004415011","360004510971","360004413172","360027343632","360020409977","360010748232","360004464752","360004419032","360031273151","360004328732","360004416232","360012506451","360030006291","360004413792","360004516591","4404256054417","360004614411","360025262272","360004456852","360004505271","360004678992","360024742632","4403988790289","4403989000977","4403989043985","360004426651","360004265852","360027497172","4411853944721","360004414471","360004462211","360004473491","360004362192","360055860371","360004541811","360004412872","360004357312","360004467451","360004503651","360004466612","360004414171","360004473071","360055750192","360004410011","360004361212","360004473771","360004418192","360013652131","360028885452","360004464232","360004383071","360004511031","360004510811","360004411091","360004674772","360004468772","360004508731","360004382511","360030008271","360004467711","360027345612","360021106092","360004471771","360004411471","360004512591","360004513831","360007119871","360004319871","360004504511","360004467871","360004512691","360017405952","360004461652","360004266932","360004266912","360004565512","360004493292","360004466792","360029587271","360004542251","360029434371","360004411691","360004512891","360004382731","360004541291","360004469352","360004467091","360004356172","360004363632","360004417772","360004410351","360004307511","360004465972","360004469052","360004540491","360004466872","360030011591","360004513771","360004544291","360004516371","360004356952","360026121771","360004503072","360004457192","360027302571","360004358472","360004504231","360004328432","360024388151","360021115432","360021113732","360021888152","360028648572","360004265772","360004499672","360004565992","360004465372","360004265832","360004463712","360044101112","360004410491","360004489312","360004361512","360004416392","360052193431","360004463832","360004469492","360020592678","360048630971","360004419432","360018586691","360004615971","360004472271","360004465412","360019752111","360004467151","360004513111","360018306577","360004491332","360018931731","360004513871","360004419492","360004489192","360004469951","360004508271","360004415111","360004512751","360004490172","360004266892","360004565432","360004327732","360029682611","360004466531","360028197392","360027545072","360004382471","360030864671","360004288592","360004540611","360028492391","360023751552","360019250151","360004551831","360004544671","360004541431","360004327612","4403665130641","360004275152","360025766511","360004502571","360004358372","360004465792","360015554452","360004456232","360004544711","360004413971","360004502492","360004410811","360004357972","360004408592","360004503851","360030533512","360028492151","360004463932","360004455692","360004503971","360004502512","360022690171","360004473291","360004676332","360004676712","360004463872","360004468992","360004319071","360018680212","360004358352","360004619731","360004318791","360004426711","360004357572","360004322271","4434972491549","360027342812","360016551212","360004615051","360025598112","360004516291","360004412812","360029669712","360004463252","360004328392","360004470071","360004382911","360004464812","360004411511","360004383371","360004617491","360004414372","360004456172","360004357692","360004356332","360004469771","360004468732","360023359371","360004356692","360004456012","360004262672","360004419952","360004563172","360004462171","360004320351","360004462072","360004511231","360004358672","360004326872","360004361152","360004467551","360025041171","360021383332","360013774072","360004357752","360004356772","360004490792","360007141531","360030533252","360004307491","360004490312","360004491012","360004492272","360026889531","360004512631","360004551011","360004411131","360004542551","360004463371","360004411451","360004413512","360029369852","360004265412","360004361752","360024454972","360004381971","360002876012","360004265892","360004491772","360004466971","360004619631","360004461632","360004413652","360004416172","360004503951","360004382631","360004412632","360004374711","360004455472","360004493212","360004540251","360018940052","360004410671","360004318911","360004455832","360004357932","360004412732","360004469012"
 ];

 for (var i = 0; i < oldkbIds.length; i++){
   if (window.location.href.indexOf(oldkbIds[i]) > -1) {
     window.location.href = 'https://legacy.support.exclaimer.com/hc/en-gb/articles/' + newkbIds[i]; 
   }
 };

 for (var i = 0; i < redirectstolegacy.length; i++) {
  var j = redirectstolegacy[i];

  for (var k = 0; k < j['from'].length; k++) {
      if (window.location.href.indexOf(j['from'][k]) > -1) {
          window.location.href = 'https://exclaimersupport.zendesk.com/hc/en-gb/articles/' + j["to"]; 
      }
  }
};
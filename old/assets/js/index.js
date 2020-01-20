// let launches = [];

var launches = getLaunches()['launches'];
generateElement(launches[0]);

const select = document.querySelector('select');
for(let id of launches) {
    if(id.missions.length != null && id.missions.length > 0) {
        const option = document.createElement('option')
        option.value = id;
        option.innerText = id.missions[0].name;
        select.appendChild(option);
    }
}
    
// getLaunches().done(x => {
//     // launches = JSON.parse(x);

//     getSingleLaunch().done(x => {    
//         launches.push(JSON.parse(x));
//         generateElement(launches[0]);

//         const select = document.querySelector('select');
//         for(let id in launches) {
//             if(Object.getOwnPropertyNames(launches[id].mission).length > 0) {
//                 const option = document.createElement('option')
//                 option.value = id;
//                 option.innerText = launches[id].mission.name;
//                 select.appendChild(option);
//             }
//         }
//     });
// });



jQuery('select').change(function() {
    const element = launches[jQuery('select').val()];
    console.log(element);
    generateElement(element);
});

jQuery('.item .content').mouseenter(x => {
    jQuery(x.currentTarget.nextElementSibling).addClass('hover');
});

jQuery('.item .content').mouseleave(x => {
    jQuery(x.currentTarget.nextElementSibling).removeClass('hover');
})
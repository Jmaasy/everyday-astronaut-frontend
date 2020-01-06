const companyMapping = [
    ['RUSSIAN FEDERAL SPACE AGENCY', 'ROSCOSMOS'],
    ['NORTHROP GRUMMAN INNOVATION SYSTEMS', 'NORTHROP GRUMMAN']
]

var generateElement = function(l) {
    if(Object.getOwnPropertyNames(l.mission).length > 0) {
        generateTitle(l);
        generateDate(l);
        generateMissionDetails(l);
        generateLaunchDetails(l);
        generateRecovery(l);
        generateLaunchLocation(l);
    }

    jQuery(document.getElementById('wrapper')).fadeIn(1000, _ => {
        document.getElementById('wrapper').style.display = "block";
    });

    jQuery(document.getElementById('loader')).fadeOut(500, _ => {
        document.getElementById('loader').style.display = "none";
    });
}

var generateTitle = function(l) {
    let agency = l.agency.name.toUpperCase();
    let mission = l.mission.name.toUpperCase();
    const rocket = l.rocket.name.toUpperCase();

    for(let company of companyMapping) {
        agency = agency.replace(company[0], company[1]);
    }

    agency = agency.split('(')[0];
    mission = mission.split('"')[0];

    const title_el = document.querySelector('.title .text');
    title_el.innerHTML = `${agency} // ${rocket} // ${mission}`;
}

var generateDate = function(l) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = l.launch.target.split(', ')[1];
    const gmt_locale = new Date(date);
    const gmt_locale_am_pm = convertToAMPM(gmt_locale);
    const utc_hour = gmt_locale.getUTCHours();
    const utc_minute = gmt_locale.getUTCMinutes();
    const html = `Launching: ${monthNames[gmt_locale.getMonth()]} ${gmt_locale.getDay()}th ${gmt_locale.getFullYear()} - ${gmt_locale_am_pm.hour}:${gmt_locale_am_pm.minute} ${gmt_locale_am_pm.ampm} (${utc_hour}:${utc_minute} UTC)`;
    
    const date_el = document.querySelector('.date');
    date_el.innerHTML = html;
} 

var generateMissionDetails = function(l) {
    const details = document.querySelector('.mission_details .details');
    const text = l.mission.description.slice(0, 306);
    details.innerHTML = text;
}

var generateLaunchDetails = function(l) {
    const payload_el = document.querySelectorAll('.launch_detail .item#payload span.content');
    const orbit_el = document.querySelectorAll('.launch_detail .item#orbit span.content');
    const type_el = document.querySelectorAll('.launch_detail .item#type span.content');
    const rocket_el = document.querySelectorAll('.launch_detail .item#rocket span.content');
    const payload_addition = (l.mission.name.length > 39) ? '...' : '';
    const payload_content = l.mission.name  .slice(0, 39) + payload_addition;

    payload_el[0].innerHTML = payload_content;
    payload_el[1].innerHTML = l.mission.name;
    orbit_el.forEach(x => x.innerHTML = (typeof l.mission.orbit == "string")? l.mission.orbit : l.mission.orbit[1]);
    type_el.forEach(x => x.innerHTML = l.mission.type);
    rocket_el.forEach(x => x.innerHTML = l.rocket.name);
}

var generateRecovery = function(l) {
    const asds_el = document.querySelector('.landing_locations .landing_ship img');
    const rtls_el = document.querySelectorAll('.landing_locations .landing_pads img');
    
    if(Object.getOwnPropertyNames(l.recovery).length > 0) {
        const first = document.querySelector('.recovery_details .details span:first-of-type');
        const last = document.querySelector('.recovery_details .details span:last-of-type');

        if(l.recovery.landings.length > 1) {
            const core_booster = l.recovery.landings.shift();
            last.innerHTML = `CENTER CORE: ${core_booster.landing_vehicle}`;    

            asds_el.style.visibility = "visible";
            rtls_el.forEach(x => x.style.visibility = "visible");
            asds_el.style.display = "block";
            document.querySelector('.landing_locations').style.display = "block";

            const side_boosters = l.recovery.landings;
            let text = 'SIDE BOOSTERS: ';
            for(let x in side_boosters) {
                if(text == 'SIDE BOOSTERS: ' && side_boosters.length > 1) {
                    text += `${side_boosters[x].landing_vehicle} & `
                } else text += side_boosters[x].landing_vehicle;

                rtls_el[x].style.display = "inline-block";
            }

            first.innerHTML = text;
        }
    } else {
        document.querySelectorAll('.recovery_details .details span').forEach(x => x.innerHTML = '')
        document.querySelector('.recovery_details .details span:first-of-type').innerHTML = 'NON RECOVERABLE';
        document.querySelector('.landing_locations').style.display = "none";

        asds_el.style.visibility = "hidden";
        rtls_el.forEach(x => x.style.visibility = "hidden");
    }

    if(l.reused.flight_nr != undefined && l.reused.flight_nr.length > 0) {
        document.querySelectorAll('.recovery_details .details span').forEach(x => x.innerHTML = '')
        document.querySelector('.recovery_details .details span:first-of-type').innerHTML = 'TBD';
        document.querySelector('.landing_locations').style.display = "none";

        asds_el.style.visibility = "hidden";
        rtls_el.forEach(x => x.style.visibility = "hidden");
    }
}

var generateLaunchLocation = function(l) {
    let pad = l.launch.launch_pad;
    if(pad.includes('Launch Complex ')) {
        pad = "LC: " + pad.split('Launch Complex ')[1].replace(',', ' //');
    }

    const launch_location = document.querySelector('.launch_location span:last-of-type');
    launch_location.innerHTML = pad;
}

var styleReset = function(a, r) {
    document.querySelectorAll('.recovery_details .details span').forEach(x => x.innerHTML = '')
    document.querySelector('.recovery_details .details span:first-of-type').innerHTML = 'TBD';
    document.querySelector('.landing_locations').style.display = "none";

    asds_el.style.visibility = "hidden";
    rtls_el.forEach(x => x.style.visibility = "hidden");
}
let judges_info = [
    {
        name: 'Ashish Banerjee',
        image_path: 'Ashish_Banerjee.webp',
        email: 'tech@ashishbanerjee.com',
        linkedin: 'https://www.linkedin.com/in/ashban/',
        designation: 'Technology Evangelist | Open Source Evangelist | Ex Technical Director @ Oracle India Pvt. Ltd'
    },
    {
        name: 'Suresh Reddy',
        image_path: 'Suresh_Reddy.webp',
        email: 'suresh.reddy@wellsfargo.com',
        linkedin: 'https://www.linkedin.com/in/suresh-reddy-7545842b/',
        designation: 'Distinguished Engineer - Digital and Innovation @ Wells Fargo | Ex-Lead @ CSC | Ex-Senior IT Engineer @CMC Limited'
    },
    {
        name: 'Anjali Sheel',
        image_path: 'Anjali_Sheel.webp',
        email: 'anjalisheel@gmail.com',
        linkedin: 'https://www.linkedin.com/in/anjali-sheel/',
        designation: 'Software Engineer II @ Microsoft | Educator @ Unacademy | Ex Siemens Healthineers'
    },
    {
        name: 'Salman Shah',
        image_path: 'Salman_Shah.webp',
        email: 'sbs.191197@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sbshah97/',
        designation: 'SDE-1 @ Microsoft | Ex-SDE @ Myntra | Formerly @ Internet Archive, IRIS NITK, Haqdarshak | GSoC 2018, GCI 2018'
    },
    {
        name: 'Rahul Verma',
        image_path: 'Rahul_Verma.webp',
        email: 'rv404674@gmail.com',
        linkedin: 'https://www.linkedin.com/in/rahul-verma-8aa59b116/',
        designation: 'BackEnd SDE-2 @ Koo | Ex-Senior Backend Engineer @ MoEngage | Ex Software Developer Intern @ SAP Labs India | Ex Open Source Developer @ Mozilla'
    },
    

]

function insert_in_div(insert_div, persons) {
    persons.forEach((person) => {
        if (person.designation === undefined) person.designation = ''
        div_text = `
        <div class="col-12 col-sm-6 col-lg-4 teams">

          <div class="card" data-aos="zoom-in">
          <div class="card-top">
          <!-- Profile_photo -->
          <div class="pic">
              <img src="./img/judges/` + person.image_path + `" alt="">
          </div>

            <!-- Info -->
            <div class="member-info">
            <span class="name"><h5>` + person.name + `</h5></span>
            <span class="post">` + person.designation + `</span>
            </div>

            <!-- Social Info -->
            <ul class="social">
               <li><a href="` + "mailto:" + person.email + `" class="fa fa-envelope"></a></li>
               <li><a href="` + person.linkedin + `" class="fa fa-linkedin"></a></li>
           </ul>

          </div>
        </div>
        </div>
            `
        insert_div.innerHTML += div_text
    })
}


var judges_div = document.getElementById('judges').getElementsByClassName('row')[0]
insert_in_div(judges_div, judges_info)

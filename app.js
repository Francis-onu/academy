const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  
  })

  const date = document.getElementById('date')
  const currentYear = new Date().getFullYear()
  date.textContent = currentYear
  

    //Testimony js
    const testimonialsContainer = document.querySelector('.testimonials-container')
    const testimonial = document.querySelector('.testimonial')
    const userimage = document.querySelector('.user-image')
    const username = document.querySelector('.username')
    const role = document.querySelector('.role')
    
    const testimonials = [
        {   
            name: 'Igoche Lagos',
            position: 'Accountant',
            photo: './images/onu.jpg',
            text:
            " I have worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, query time.",
        },
    
        {
            name: 'Grace Ibadan',
            position: 'Engineer',
            photo: 'https://media.istockphoto.com/photos/positivity-puts-you-in-a-position-of-power-picture-id1299077582?b=1&k=20&m=1299077582&s=170667a&w=0&h=Esjqlg_WCWmTc83Dv6PLhwPFwYN9uXoclBn0cUhtS5I=',
        
            text: 
            " I had my concern that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in minutes.I'm looking forward to work with him again and I totally recommend him. ",
        
        
        },
    {
        name: 'Josephine Abuja',
        position: 'Economist',
        photo: './images/Josephine.png',
    
        text: 
        " I have worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy.",
    
    
    },
    {
        name: 'Caique Silva',
        position: 'Pharmacist',
        photo: 'https://images.unsplash.com/photo-1502767882403-636aee14f873?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxNzI5MjU4fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    
        text: "This guy is an oustanding frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extral mile to make sure that you are happy with your project. I will surely work again with him!",
    },
    
    {
        name: 'Evlin Carl',
        position: 'Accountant',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8c3Z1eWRFanJldE18fGVufDB8fHx8&dpr=2&auto=format&fit=crop&w=291.2&q=60',
        
        text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic.He is very strong in HTML/CSS technology.",
    },
    {
        name: 'Jennifer carly',
        position: 'Lawyer',
        photo: 'https://images.unsplash.com/photo-1529957713629-c085c35d0ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality works. We have been lucky to work with him!",
    },
    
    
       {
        name: 'Kate Henz',
        position: 'Architecture',
        photo: 'https://media.istockphoto.com/photos/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-picture-id1279844456?b=1&k=20&m=1279844456&s=170667a&w=0&h=6399KahGfe5Ls7K3fDy7GanXJYGt6muP01aMhzeUBPA=',
        text: "This guy is a great developer. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
    {
        name: 'Joyce',
        position: 'Doctor',
        photo: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        text: "This guy is an amazing developer. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelanceers. We'll definitely repeat with him",
    },
    
    ]
    
    let idx = 1
    
    function updateTestimonial() {
        const { name, position, photo, text } = testimonials[idx]
    
        testimonial.innerHTML = text
        userimage.src = photo
        username.innerHTML = name
        role.innerHTML = position
    
        idx++
    
        if(idx > testimonials.length - 1) {
            idx = 0
    
        }
    
    
    }
    
    setInterval(updateTestimonial, 10000)

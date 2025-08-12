

const random_review={ 
  0: { review: "Best gym I've ever joined! The equipment is brand new, trainers are super professional, and the atmosphere is motivating." ,customer:"MS.Alaa" },
  1: { review: "Clean and well-organized place. The Zumba instructors are amazing – I always leave feeling full of energy.",customer:"ahmed hh" },
  2: { review:  "Great service, but I wish they had longer morning hours.", customer:"smsma"},
  3: { review: "Changed my life! Lost 12 kg in 3 months thanks to their workout and nutrition program." , customer:"mohanad"},
  4: { review: "Excellent machines, but it gets a bit crowded during peak hours. Trainers are still very helpful though.",customer: "fleb"},
  5: { review: "Best value for money in the area! Membership prices are very reasonable.",customer:"peter"},
  6: { review:  "I love the cardio section – the machines have screens and tracking apps, makes the workout much more fun.",customer:"sarah"},
  7: { review:  "Comfortable environment, music is at the perfect volume, and the trainer is really friendly.",customer:"doha eng"},
  8: { review:"First time in my life I've stayed consistent for 6 months straight – this gym truly motivates you." ,customer: "mariam"},
  9: { review:  "The group classes like CrossFit are so much fun! I've seen a huge improvement in my fitness." ,customer:"rana"}
};

const btnReview = document.querySelector(".customer_review");
const word= document.querySelector("#review");
const person=document.querySelector("#name");

btnReview.addEventListener("click",() => {
  const random = Math.floor(Math.random() * 10);
  word.innerHTML = ` <q><br><strong>${random_review[random].review} </strong></q>`;
person.textContent="-- " + random_review[random].customer;
})


document.getElementById("contactForm").addEventListener("submit",()=> {

  alert("Thanks fo your mssage ! we will get back to you soon.");
}
)


function bookNow() {
  alert("Thanks for booking! We will contact you shortly.");
}

function bookTrainer(name) {
    alert("You booked " + name);
  }

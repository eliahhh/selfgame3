class Form{

    constructor(){

        this.greeting = createElement('h2');
        this.input = createInput("");
        this.email = createInput("");
        this.email1 = createElement('h3');
        this.button = createButton('submit');
        this.title = createElement('h2');
        this.name = createElement('h3');
        this.reset = createButton('reset');

        this.input.position(650,120);
        this.email.position(650,150);
        this.input.style('width', '160px');
        this.email.style('width', '160px');
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('background', 'yellow');
        this.reset.style('width', '70px');
        this.reset.style('height', '40px');
        this.reset.style('background','red');
        

        //question1
        this.question1 = createElement('h4',"1. Does the school have the basic necessities required for the student?")
        this.radio1 = createRadio('h5');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.style('width','1500px');

         //question2
         this.question2 = createElement('h4',"2. Do you like school?")
         this.radio2 = createRadio('h5');
         this.radio2.option('YES');
         this.radio2.option('NO');
         this.radio2.style('width','1500px');
        
          //question3
        this.question3 = createElement('h4',"3. Do you like Math?")
        this.radio3 = createRadio('h5');
        this.radio3.option('YES');
        this.radio3.option('NO');
        this.radio3.style('width','1500px');
        
         //question4
         this.question4 = createElement('h4',"4. Do you like school sports?")
         this.radio4 = createRadio('h5');
         this.radio4.option('YES');
         this.radio4.option('NO');
         this.radio4.style('width','1500px');
        
          //question5
        this.question5 = createElement('h4',"5. Do you like online school more than regular school?")
        this.radio5 = createRadio('h5');
        this.radio5.option('YES');
        this.radio5.option('NO');
        this.radio5.style('width','1500px');

        this.description = createInput("Please Give Additional Comments");
        this.description.style('width','900px');
        this.description.style('height','30px');
        

    }

    display(){

      this.title.html("Student Survey About School");
      this.title.position(450,30);
      this.name.html("Your Name");
      this.name.position(450,100);
      this.email1.html("Your Email");

      this.email1.position(450,135);
      this.button.position(650,550);
      this.reset.position(1100,50);

      this.question1.position(200,190);
      this.radio1.position(1000,210);

      this.question2.position(200,240);
      this.radio2.position(1000,260);

      this.question3.position(200,290);
      this.radio3.position(1000,310);

      this.question4.position(200,340);
      this.radio4.position(1000,360);

      this.question5.position(200,400);
      this.radio5.position(1000,420);

      this.description.position(200,475);
      this.description.style('color','blue');
      this.description.style('font-size','20px');

      this.button.mousePressed(()=>{
        this.greeting.show();
        this.description.hide();
        this.greeting.html("Thanks For Your Submission!");
        this.greeting.position(370,600);
       
        this.greeting.style('width','600px');
        this.greeting.style('height','70px');
        this.greeting.style('background','yellow');
        this.greeting.style('padding','40px');
        User.input = this.input.value();
        User.email1 = this.email1.value();
        User.radio1 = this.radio1.value();
        User.radio2 = this.radio2.value();
        User.radio3 = this.radio3.value();
        User.radio4 = this.radio4.value();
        User.radio5 = this.radio5.value();
        personCount+=1;
        User.index = personCount;
        User.update();
        User.updateCount(personCount);

      })
      this.reset.mousePressed(()=>{
        this.greeting.hide();
        this.description.show();
        this.input.value('');
        this.email.value('');
        this.radio1.value();
        this.radio2.value();
        this.radio3.value();
        this.radio4.value();
        this.radio5.value();
      })
    }

}

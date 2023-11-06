import React, {useState} from "react";
import "../styles/corinasbookcard.css";
import '../App.css';
import her from "../images/her.png";
import little_secret from "../images/little_secret.png";
import music_life from "../images/music_life.jpg";
import toward_tomorrow from "../images/toward_tomorrow.png";
import mindfullness from "../images/mindfulness.png";
import safari_animals from "../images/safari_animals.png";
import solo from "../images/solo.png";
import story_you_me from "../images/story_you_me.png";
import healty_bfast from "../images/healty_bfast.png";
import artic_animals from "../images/artic_animals.png";
import calm from "../images/calm.png";
import dreamer from "../images/dreamer.png";
import Header2 from "../components/Header2";
import CorinasBookCard from '../components/CorinasBookCard';
import Footer from "../components/Footer";
 
 
function DetailsPage({onPurchase}) {
  

  return (
    <div className="App">      
      <Header2 />
      <br/>
      <main>
        <section>
          <h2 className="featured">Featured Books</h2>
            <div className = "corinascards">
              <br/>
              <br/>     
              <CorinasBookCard image = {her} title = "Her" author = "Julia Johnson" price = {19.99}  description = "Emma gets thrust into the high-pressure world of corporate finance when she crosses paths with the charismatic entrepreneur Daniel. As she navigates the challenges of her new life and a budding romance, Emma's journey becomes a test of her inner strength and character." onPurchase = {onPurchase}/>
              <CorinasBookCard image = {little_secret} title = "My Little Secret" author = "Claudia Wilson" price ={24.99} description= "Sarah's life seems perfect from the outside: a thriving career, a loving family, and supportive friends. But beneath her carefully curated facade lies a dark and closely guarded secret that threatens to unravel her world." onPurchase={onPurchase}/>
              <CorinasBookCard image = {music_life} title = "Music Life" author = "Helene Paquet" price ={21.99} description = "In Music Life, readers are invited on a journey of lyrical exploration as you delve into the profound impact of music on individuals and society, tracing its historical significance, cultural manifestations, and transformative power." onPurchase={onPurchase}/>  
              <CorinasBookCard image = {mindfullness} title = "Mindfullness" author = "Avery Davis" price ={25.99} description="Mindfulness is a practice and philosophy that encourages individuals to be fully present in the moment. It involves cultivating self-awareness and a deeper connection with the present, which can lead to reduced stress, increased focus, and a greater sense of well-being." onPurchase={onPurchase} />
              <br/>
            </div>
          <h2 className="new-arrivals">New Arrivals</h2>        
            <div className = "corinascards">
            <CorinasBookCard image = {toward_tomorrow} title = "Toward Tomorrow" author = "Kimberl Nguyen" price ={15.99} description = "Through the stories of visionary thinkers, determined innovators, and the collective hopes they share, Toward Tomorrow highlights the resilience of the human spirit, our capacity for progress, and the pursuit of a better world."onPurchase={onPurchase}/>
            <CorinasBookCard image = {healty_bfast} title = "Healthly B'fast" author = "Marianna Napoliani" price ={25.99} description = "Through mouthwatering recipes, expert advice, and stories of individuals who have transformed their lives through a wholesome breakfast routine, Healthy Breakfast underscores the vital role this meal plays in fueling our day and promoting overall well-being."onPurchase={onPurchase}/>
            <CorinasBookCard image = {safari_animals} title = "Safari Animals" author = "Tara Hackett" price ={18.99} description = "Young readers can embark on an exciting expedition through the wild and diverse world of safari animals. Through captivating stories and vibrant illustrations, children will learn about various habitats, behaviors, and the importance of wildlife conservation." onPurchase = {onPurchase}/>
            <CorinasBookCard image = {solo} title = "Solo" author = "Ambrose Wainwright" price ={25.99} description = "Solo follows the life of James Bond as he navigates a world of espionage, danger, and intrigue. Boyd's narrative delves into Bond's complex character, offering readers a fresh perspective on the legendary spy."onPurchase={onPurchase} />
            <CorinasBookCard image = {story_you_me} title = "Story About You and me" author = "Hae-Won Jeon" price ={25.99} description = "The book invites readers into an emotionally charged narrative that explores the intricate dynamics of love and friendship. Through its storytelling and relatable characters, the novel serves as a reflection on the shared moments and connections that shape our lives." onPurchase={onPurchase}/>
            <CorinasBookCard image = {dreamer} title = "Dreamer" author = "Sacha Dubois" price ={25.99} description="Dreamer is an inspiring autobiography by Sacha Dubois that chronicles a life fueled by dreams and unwavering determination. In this captivating memoir, Dubois shares his personal journey, from humble beginnings to the realization of his most cherished aspirations. " onPurchase={onPurchase}/>
            <CorinasBookCard image = {artic_animals} title = "Artic Animals" author = "Bailey Dupont" price ={19.99} description="Arctic Animals is a delightful children's book that takes readers on an exciting adventure through the Arctic. Filled with lovable characters and playful storytelling, it's an educational and entertaining journey that introduces kids to the enchanting world of Arctic animals." onPurchase={onPurchase}/>
            <CorinasBookCard image = {calm} title = "The Things You Can... " author = "Olivia Wilson" price ={23.99} description="The Things You Can Do When You Calm Down is a insightful and practical self-help book that guides adults on the journey to emotional balance. It offers a wealth of techniques and strategies to manage stress, anxiety, and overwhelming emotions, empowering readers to unlock their full potential." onPurchase={onPurchase}/>
          </div>
        </section>
      </main>
      <br/>
      <br/>    
      <Footer/>     
    </div>
  );
};
 
export default DetailsPage;
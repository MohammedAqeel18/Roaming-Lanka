function HeroSection(){
    return(
    
        <section className="relative h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 z-40">

            <img src="/images/col.jpg"
            className="absolute inset-0 w-full h-full object-cover"
           / >

                <div className="relative z-20 text-center text-white">
            <h1 className="text-6xl font-bold mb-5"> Discover Sri Lanka</h1>
                
             <p className="text-xl mb-8">
                      Hidden gems, culture, beaches and unforgettable experinces
                 </p>   
         <button className="bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700"> Explore Now</button>
                </div>
         
            </div>
        </section>
    );
}

export default HeroSection;
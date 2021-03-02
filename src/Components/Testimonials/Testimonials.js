import React,{useState} from 'react'

const Testimonials = () => {

    const arrTestimonials = [
        {name:"Jack",text:"Все очень нравится и товар и работа интернет- магазина. Уже пол года заказываю вещи. И за пол года полное доверие к магазину. Спасибо вам за вашу оперативную работу."},
        {name:"Вікторія",text:"Тут все завжди швидки і якісно! Дякую"}
    ]

    const [testimonials,setTestimonials] = useState(arrTestimonials);
    const [newTestimonials,setNewTestimonials] = useState({
        name:"",
        text:"",
    })

    const handleNameChange = (e) => (
        setNewTestimonials((value)=> ({
            ...value,
            name:e.target.value
        }))
    )

    const handleTextChange = (e) => (
        setNewTestimonials((value)=> ({
            ...value,
            text:e.target.value
        }))
    )

    const onSend = (e) => {
        e.preventDefault();
        setNewTestimonials({
            name:"",
            text:"",
        })
        setTestimonials((value) => {
            return [...value,newTestimonials]
        })
    }


    return (

        <>  
            <h1 className="page-title">Testimonials</h1>
            {
                testimonials.map((item,i) => (
                    <div 
                        key={i}
                        style={{
                            backgroundColor:"rgba(255,255,255,0.75)",
                            padding:"10px",
                    }}>
                        <div style={{marginBottom:"15px"}}>Name: {item.name}</div>
                        <div style={{marginBottom:"15px"}}>Message: {item.text}</div>
                        <hr/>
                    </div>
                ))
            }

            <form 
                style={{marginTop:"15px"}}
                onSubmit={onSend}
            >
                <div>
                    <input 
                        placeholder="Your name"
                        type="text"
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <textarea 
                        placeholder="Your message"
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                        cols="30" 
                        rows="10"
                    ></textarea>
                </div>
                <button>Leave a comment</button>
            </form>
        </>
    )
}

export default Testimonials
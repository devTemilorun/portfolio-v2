import Button from "@/components/Button";
import  { useRouter } from "next/navigation"


const Contact = () => {
    const router = useRouter();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Contact.</h2>
        <p className="text-xl md:text-2xl mb-8 font-semibold text-black">
          Let's Work Together
        </p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button
            onClick={ ()=>router.push("/contact") } variant="outline" className="border-black text-black hover:bg-black hover:text-white">
          Say Hello →
        </Button>
      </div>
    </section>
  )
}

export default Contact

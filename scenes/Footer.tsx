import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
     <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                
                <div>
                    <h3 className="text-2xl font-bold text-black mb-4">
                        devTemilorun.
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System | 
                        Turning Ideas into Scalable, User-Focused Web Solutions
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-black mb-4">Quick Links</h4>
                    <div className="flex flex-col space-y-3 text-gray-600">
                        <Link href="/" className="hover:text-black transition-colors duration-200 hover:underline underline-offset-4">
                            Home
                        </Link>
                        <Link href="/#projects" className="hover:text-black transition-colors duration-200 hover:underline underline-offset-4">
                            Projects
                        </Link>
                        <Link href="/#tech" className="hover:text-black transition-colors duration-200 hover:underline underline-offset-4">
                            Tech Stack
                        </Link>
                        <Link href="/contact" className="hover:text-black transition-colors duration-200 hover:underline underline-offset-4">
                            Contact
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-black mb-4">Connect with me</h4>
                    <div className="space-y-3 text-gray-600">
                        <p>
                            Email:{' '}
                            <a
                                href="mailto:dev.temilorun@gmail.com"
                                className="hover:text-black transition-colors"
                            >
                                dev.temilorun@gmail.com
                            </a>
                        </p>
                        <p>
                            Phone:{' '}
                            <a href="tel:+2347031225674" className="hover:text-black transition-colors">
                                +234 703 122 5674
                            </a>
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-4">
                        <a
                            href="https://github.com/devTemilorun"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://wa.me/2347031225674"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            <FaWhatsapp size={18} />
                        </a>
                        <a
                            href="https://x.com/dev_Temilorun"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X / Twitter"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/olawuni-israel-oluwatemilorun-85714a324"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:dev.temilorun@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                        >
                            <MdEmail size={18} />
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()} devTemilorun. All rights reserved.
                    <span className="mx-2">•</span>
                    Built with passion & code.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer

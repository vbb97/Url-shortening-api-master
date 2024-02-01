import Image from "next/image"

export default function Footer() {
    return (
        <section className="sm:py-12 sm:flex sm:flex-col sm:items-center sm:gap-8 sm:bg-neutralVeryDarkViolet">
            <Image width={121} height={33} src="./images/light-logo.svg" alt="Logo da marca Shortly."/>
            <div className="sm:flex sm:flex-col sm:items-center sm:gap-8 sm:text-center">
                <div className="sm:flex sm:flex-col sm:gap-4">
                    <h4 className="sm:text-neutral-100 sm:text-sm">Features</h4>
                    <ul className="sm:flex sm:flex-col sm:gap-2">
                        <li className="sm:text-neutralGray sm:text-sm">Link Shortening</li>
                        <li className="sm:text-neutralGray sm:text-sm">Branded Links</li>
                        <li className="sm:text-neutralGray sm:text-sm">Analytics</li>
                    </ul>
                </div>

                <div className="sm:flex sm:flex-col sm:gap-4">
                    <h4 className="sm:text-neutral-100 sm:text-sm">Resources</h4>
                    <ul className="sm:flex sm:flex-col sm:gap-2">
                        <li className="sm:text-neutralGray sm:text-sm">Blog</li>
                        <li className="sm:text-neutralGray sm:text-sm">Developers</li>
                        <li className="sm:text-neutralGray sm:text-sm">Support</li>
                    </ul>
                </div>

                <div className="sm:flex sm:flex-col sm:gap-4">
                    <h4 className="sm:text-neutral-100 sm:text-sm">Company</h4>
                    <ul className="sm:flex sm:flex-col sm:gap-2">
                        <li className="sm:text-neutralGray sm:text-sm">About</li>
                        <li className="sm:text-neutralGray sm:text-sm">Our Team</li>
                        <li className="sm:text-neutralGray sm:text-sm">Careers</li>
                        <li className="sm:text-neutralGray sm:text-sm">Contact</li>
                    </ul>
                </div>
            </div>
            <div className="sm:flex sm:items-center sm:gap-6">
                <Image width={24} height={24} src="./images/icon-facebook.svg" alt="Logo da marca Facebook."/>
                <Image width={24} height={24} src="./images/icon-twitter.svg" alt="Logo da marca Twitter."/>
                <Image width={24} height={24} src="./images/icon-pinterest.svg" alt="Logo da marca Pinterest."/>
                <Image width={24} height={24} src="./images/icon-instagram.svg" alt="Logo da marca Instagram."/>
            </div>
        </section>
    )
}
import Link from "./link";
import Image from "next/image"
import Logo from "@/public/favicon/logo.svg"
import Container from "@/app/_components/container";
import headerNavLinks from "@/data/headerNavLinks"


const Header = () => {
  return (
    <Container>
      <header className="flex justify-between pt-10 pb-2 bg-neutral-50 border-b border-neutral-200">
        <div>
          <Link href="/" aria-label="Emotional Test">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image
                  src="/favicon/logo.svg"
                  width={64}
                  height={64}
                  alt="Icon of this Emotional Quiz Website"
                />
              </div>
              <div className="hidden h-15 text-3xl font-bold sm:block">
                LLM Tutorial
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-end px-16 space-x-6 sm:space-x-20">
          {headerNavLinks
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-xl text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
        </div>
      </header>
    </Container>

  )
}

export default Header

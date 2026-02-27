import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import Image from "../image"
import logo from "/src/assets/logo.png"

const Header = () => {
  return (
    <>
      <div className="py-3 bg-white">
        <Container>
          <Flex className={`justify-between`}>
            <div className="">
            <Image imgSrc={logo} />

            </div>
            <div className="">
              <ul className="flex gap-x-5 text-black">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="">
              <Button btnText={"Contact Us"} className={"bg-btnColor "}></Button>
            </div>

          </Flex>

        </Container>
      </div>


    </>
  )
}
export default Header
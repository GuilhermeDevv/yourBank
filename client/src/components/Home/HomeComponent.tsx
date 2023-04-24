import {
  Container,
  ContainerMoneyStatus,
  Content,
  ContentInfoUser,
  Header,
  InfoUser,
  Logo,
  Main,
  Menu,
  MoneyStatus,
} from './styles'
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillSetting,
} from 'react-icons/ai'
import { MdPix, MdOutlineAttachMoney } from 'react-icons/md'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaFileAlt, FaUser } from 'react-icons/fa'
import { FiSliders } from 'react-icons/fi'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { RiFileTransferFill, RiBarcodeFill } from 'react-icons/ri'
import logo from '@/img/logo.png'
import { useEffect, useState } from 'react'
import { Card } from './components/card/Card'
import Slider from 'react-slick'

function HomeComponent() {
  const [visibilityMoney, setVisibilityMoney] = useState(true)
  const [menu, setMenu] = useState(true)
  const [displayMenu, setDisplayMenu] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDisplayMenu(true)
    }, 1200)
  }, [])
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    prevArrow: (
      <button className="slick-prev">
        <GrFormPrevious size={40} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <GrFormNext size={40} />
      </button>
    ),
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  }

  return (
    <Container>
      <Content>
        <Header>
          <Logo Url_Logo={logo} />
          <button>Sair</button>
        </Header>
        <InfoUser visibilityMoney={visibilityMoney}>
          <span>Olá, {'Guilherme'}</span>
          <span>Saldo: {''}</span>
          <div>
            <strong> Ta duro! </strong>
            {visibilityMoney ? (
              <AiOutlineEye
                size={22}
                onClick={() => {
                  setVisibilityMoney((prev) => !prev)
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={22}
                onClick={() => {
                  setVisibilityMoney((prev) => !prev)
                }}
              />
            )}
            <Menu
              onClick={() => {
                setMenu((prev) => !prev)
              }}
            >
              {menu ? <BiMenu size={40} /> : <IoMdClose size={40} />}
            </Menu>
          </div>
        </InfoUser>
        <Main>
          <Slider {...settings}>
            <Card name="Área pix" Icon={MdPix} />
            <Card name="Transferir" Icon={RiFileTransferFill} />
            <Card name="Empréstimo" Icon={MdOutlineAttachMoney} />
            <Card name="Pagar Boleto" Icon={RiBarcodeFill} />
          </Slider>
          <section>
            <ContentInfoUser
              visibilityMenu={menu}
              displayLoadMenu={displayMenu}
            >
              <div>
                <FaUser size={18} />
                <span>Meus dados</span>
              </div>
              <div>
                <FiSliders size={18} />
                <span>Segurança</span>
              </div>
              <div>
                <MdPix size={18} />
                <span>Configurar chave pix</span>
              </div>
              <div>
                <AiFillSetting size={18} />
                <span>Configurar conta</span>
              </div>
              <div>
                <FaFileAlt size={18} />
                <span>Sobre</span>
              </div>
            </ContentInfoUser>
            <ContainerMoneyStatus>
              <MoneyStatus>
                <div>
                  <MdPix size={18} />
                  <h3>transferência via pix</h3>
                  <span></span>
                  <h6>13/04/2023</h6>
                </div>
                <div>
                  <span></span>
                  <h3>R$ 14.200,36</h3>
                </div>
                <span>TransferWise</span>
              </MoneyStatus>
              <MoneyStatus>
                <div>
                  <MdPix size={18} />
                  <h3>transferência via pix</h3>
                  <span></span>
                  <h6>12/04/2023</h6>
                </div>
                <div>
                  <span></span>
                  <h3>R$ 968,32</h3>
                </div>
                <span>TransferWise</span>
              </MoneyStatus>
              <MoneyStatus>
                <div>
                  <MdPix size={18} />
                  <h3>transferência via pix</h3>
                  <span></span>
                  <h6>10/04/2023</h6>
                </div>
                <div>
                  <span></span>
                  <h3>R$ 9.968,32</h3>
                </div>
                <span>TransferWise</span>
              </MoneyStatus>
              <MoneyStatus>
                <div>
                  <MdPix size={18} />
                  <h3>transferência via pix</h3>
                  <span></span>
                  <h6>06/02/2023</h6>
                </div>
                <div>
                  <span></span>
                  <h3>R$ 5.258,32</h3>
                </div>
                <span>TransferWise</span>
              </MoneyStatus>
              <MoneyStatus>
                <div>
                  <MdPix size={18} />
                  <h3>transferência via pix</h3>
                  <span></span>
                  <h6>29/03/2023</h6>
                </div>
                <div>
                  <span></span>
                  <h3>R$ 500,00</h3>
                </div>
                <span>TransferWise</span>
              </MoneyStatus>
            </ContainerMoneyStatus>
          </section>
        </Main>
      </Content>
    </Container>
  )
}

export default HomeComponent

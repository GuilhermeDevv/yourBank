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
  PixContainer,
} from './styles'
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiFillSetting,
} from 'react-icons/ai'
import { MdPix, MdOutlineAttachMoney } from 'react-icons/md'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FaFileAlt, FaUser } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { RiFileTransferFill, RiBarcodeFill } from 'react-icons/ri'
import logo from '@/img/logo.png'
import { useEffect, useState, useContext, useMemo, useCallback } from 'react'
import { Card } from './components/card/Card'
import { ConfigAccount } from '../ConfigAccount/ConfigAccount'
import Slider from 'react-slick'
import { AuthContext, ITransactions, IUserData } from '@/context/userContext'
import { useNavigate, Link } from 'react-router-dom'
import { formatCurrency } from '@/utils/formatMoney'
import { formatISODate } from '@/utils/formatDate'
import { UserDataAccount } from '../UserDataAccount/UserDataAccount'
import { TransferMoney } from '../TransferMoney/TransferMoney'

export function HomeComponent() {
  const navigate = useNavigate()
  const { userData, authorized } = useContext(AuthContext)
  const [visibilityMoney, setVisibilityMoney] = useState(true)
  const [menu, setMenu] = useState(true)
  const [displayMenu, setDisplayMenu] = useState(false)
  const [visibilityConfigAccount, setVisibilityConfigAccount] = useState(false)
  const [visibilityTransferMoney, setVisibilityTransferMoney] = useState(false)
  const [visibilityDataUserAccount, setVisibilityDataUserAccount] =
    useState(false)
  const [data, setData] = useState<IUserData>({
    name: '',
    email: '',
    balance: '',
  })
  const [transaction, setTransaction] = useState<ITransactions[]>([
    {
      amount: 0,
      id: 0,
      receiver: { name: '', email: '' },
      logs: [{ createdAt: '' }],
    },
  ])
  useEffect(() => {
    if (authorized) {
      setData(userData)
      const { receivedTransactions, sentTransactions } = userData
      if (receivedTransactions && sentTransactions) {
        // @ts-ignore
        setTransaction([...sentTransactions, ...receivedTransactions])
      }
      setTimeout(() => {
        setDisplayMenu(true)
      }, 1200)
    } else {
      navigate('/login')
    }
  }, [userData])
  const settings = useMemo(
    () => ({
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
    }),
    [],
  )

  const handleVisibilityMoney = useCallback(() => {
    setVisibilityMoney((prev) => !prev)
  }, [])

  const handleMenu = useCallback(() => {
    setMenu((prev) => !prev)
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <Logo Url_Logo={logo} />
          <button>Sair</button>
        </Header>
        <InfoUser visibilityMoney={visibilityMoney}>
          <span>Olá, {data && data.name}</span>
          <span>Saldo:</span>
          <div>
            <strong>
              R$ {visibilityMoney ? '**********' : formatCurrency(data.balance)}{' '}
            </strong>
            {visibilityMoney ? (
              <AiOutlineEye size={22} onClick={handleVisibilityMoney} />
            ) : (
              <AiOutlineEyeInvisible
                size={22}
                onClick={handleVisibilityMoney}
              />
            )}
            <Menu onClick={handleMenu}>
              {menu ? <BiMenu size={40} /> : <IoMdClose size={40} />}
            </Menu>
          </div>
        </InfoUser>
        <Main>
          <Slider {...settings}>
            <PixContainer
              onClick={() => {
                setVisibilityTransferMoney((prev) => !prev)
              }}
            >
              <Card name="Área pix" Icon={MdPix} />
            </PixContainer>
            <Card name="Transferir" Icon={RiFileTransferFill} />
            <Card name="Empréstimo" Icon={MdOutlineAttachMoney} />
            <Card name="Pagar Boleto" Icon={RiBarcodeFill} />
          </Slider>
          <section>
            <ContentInfoUser
              visibilityMenu={menu}
              displayLoadMenu={displayMenu}
            >
              <div
                onClick={() => {
                  setVisibilityDataUserAccount(true)
                }}
              >
                <FaUser size={18} />
                <span>Meus dados</span>
              </div>

              <div
                onClick={() => {
                  setVisibilityConfigAccount(true)
                }}
              >
                <AiFillSetting size={18} />
                <span>alterar senha da conta</span>
              </div>
              <Link to="/about">
                <div>
                  <FaFileAlt size={18} />
                  <span>Sobre</span>
                </div>
              </Link>
            </ContentInfoUser>
            <ContainerMoneyStatus>
              {[...transaction].map((v, i) => {
                return (
                  <MoneyStatus key={i} color={v.receiver ? 'red' : 'green'}>
                    <div>
                      <MdPix size={18} />
                      <h3>transferência via pix</h3>
                      <span></span>
                      <h6>{formatISODate(v.logs[0].createdAt)}</h6>
                    </div>
                    <div>
                      <span />
                      <h3>{formatCurrency(String(v.amount))}</h3>
                    </div>
                    <span>
                      {v.receiver
                        ? `voce enviou para ${v.receiver.name}`
                        : v.sender
                        ? `voce recebeu de ${v.sender.name}`
                        : 'Transação desconhecida'}
                    </span>
                  </MoneyStatus>
                )
              })}
            </ContainerMoneyStatus>
          </section>
        </Main>
        <aside>
          {visibilityConfigAccount && (
            <ConfigAccount
              fnVisibilityConfigAccount={setVisibilityConfigAccount}
            />
          )}
          {visibilityDataUserAccount && (
            <UserDataAccount
              fnVisibilityDataUserAccount={setVisibilityDataUserAccount}
            />
          )}
          {visibilityTransferMoney && (
            <TransferMoney
              visibilityTransferMoney={setVisibilityTransferMoney}
            />
          )}
        </aside>
      </Content>
    </Container>
  )
}

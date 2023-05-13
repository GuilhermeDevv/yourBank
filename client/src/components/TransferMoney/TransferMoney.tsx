import React, { useContext, useState } from 'react'
import { AuthContext } from '@/context/userContext'
import { CloseConfig, Container, Content, Form, Main } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BsPersonCircle } from 'react-icons/bs'
import Success from '@/../public/success.svg'
import Error from '@/../public/error.svg'
import Warning from '@/../public/warning.svg'
import { CardStatus } from '../CardStatus/CardStatus'
type ConfigTransferProps = {
  visibilityTransferMoney: (v: boolean) => void
}
const schema = z
  .object({
    email: z.coerce.string().email('isto não é um E-mail valido.'),
    amount: z.coerce.number({
      invalid_type_error: 'isto não é um valor valido.',
    }),
  })
  .required()
type FormData = z.infer<typeof schema>

export function TransferMoney({
  visibilityTransferMoney,
}: ConfigTransferProps) {
  const { userData, setUserData } = useContext(AuthContext)
  const [visibilityCardStatus, setVisibilityCardStatus] =
    useState<boolean>(false)
  const [textCard, setTextCard] = useState('')
  const [srcCard, setSrcCard] = useState('')
  const [colorCard, setColorCard] = useState('')
  const [statusCard, setStatusCard] = useState('')
  const [fnCallbackCard, setFnCallbackCard] = useState<() => void>(() => {})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  function isSuccess() {
    visibilityTransferMoney(false)
  }
  function isError() {
    setVisibilityCardStatus(false)
  }
  function onSubmit({ email, amount }: FormData) {
    if (userData.email !== email) {
      axios
        .post('http://localhost:3333/user/transactions', {
          senderUserEmail: userData.email,
          receiverUserEmail: email,
          amount,
        })
        .then(() => {
          setTextCard('Transferência feita com sucesso.')
          setSrcCard(Success)
          setColorCard('green')
          setStatusCard('SUCESSO')
          setVisibilityCardStatus(true)
          setFnCallbackCard(() => isSuccess)
        })
        .catch((err) => {
          setTextCard(err.response.data.message)
          setSrcCard(Error)
          setColorCard('red')
          setStatusCard('FALHA')
          setVisibilityCardStatus(true)
          setFnCallbackCard(() => isError)
        })
        .finally(() => {
          axios
            .post('http://localhost:3333/user/login', {
              email: userData.email,
              password: userData.password,
            })
            .then((newData) => {
              setUserData(newData.data.message)
            })
        })
      return
    }

    setTextCard('Para de ser malandro hahaha🤣😅')
    setSrcCard(Warning)
    setColorCard('yellow')
    setStatusCard('CUIDADO!')
    setVisibilityCardStatus(true)
    setFnCallbackCard(() => isError)
  }
  return (
    <Container>
      <Content>
        <CloseConfig
          onClick={() => {
            visibilityTransferMoney(false)
          }}
        >
          <AiOutlineClose size={30} />
        </CloseConfig>
        <Main>
          <h2>
            Olá, <span>{userData.name}</span>
          </h2>
          <BsPersonCircle size={40} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <span>TRANSFERÊNCIA PIX</span>
            <div>
              <input
                type="text"
                placeholder="Para quem deseja enviar?"
                {...register('email')}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="R$00,00"
                {...register('amount')}
              />
              <p>{errors.amount?.message}</p>
            </div>
            <button type="submit">Transferir</button>
          </Form>
        </Main>
        {visibilityCardStatus && (
          <CardStatus
            text={textCard}
            src={srcCard}
            status={statusCard}
            fnCallback={fnCallbackCard!}
            cor={colorCard}
          />
        )}
      </Content>
    </Container>
  )
}
import IUserRepository from '../../repositories/IUserRepository'

export class TransactionUserServices {
  constructor(private repository: IUserRepository) {}
  async execute(
    senderUserEmail: string,
    receiverUserEmail: string,
    amount: string,
  ) {
    const senderAccount = await this.repository.findByEmail(senderUserEmail)
    const receiverAccount = await this.repository.findByEmail(receiverUserEmail)

    if (!senderAccount || !receiverAccount) {
      return {
        message: 'Conta do usuário ou remetente não encontrada',
        status: 404,
      }
    }

    const amountNumber = +amount

    if (isNaN(amountNumber) || amountNumber <= 0) {
      return {
        message: 'Valor de transação inválido',
        status: 400,
      }
    }

    if (senderAccount.balance < amountNumber) {
      return { message: 'Saldo insuficiente', status: 400 }
    }

    const newSenderBalance = senderAccount.balance - amountNumber
    const newReceiverBalance = receiverAccount.balance + amountNumber

    const responseTransaction = await this.repository.transaction({
      sender: senderAccount,
      receiver: receiverAccount,
      amount: amountNumber,
    })

    if (responseTransaction) {
      this.repository.transactionLog({
        message: 'transferência feita com sucesso ',
        status: '200',
        transactionId: responseTransaction.id,
      })
    } else {
      return {
        message: 'Erro interno!',
        status: 500,
      }
    }

    await this.repository.update(
      { balance: newSenderBalance },
      senderAccount.email,
    )
    await this.repository.update(
      { balance: newReceiverBalance },
      receiverAccount.email,
    )

    return { message: '', status: 204 }
  }
}

const useSmsContext = () => {
  const replaceVariables = (text, variables) => {
    const regex = /{{(\w+)}}/g
    const matches = [...text.matchAll(regex)].map(([, x]) => x)
    let newSms = text
    let sms = matches.map(match => {
      newSms = newSms.replace(`{{${match}}}`, variables[match])
      return newSms
    })
    return sms[sms.length - 1]
  }

  return {
    replaceVariables
  }
}

export default useSmsContext
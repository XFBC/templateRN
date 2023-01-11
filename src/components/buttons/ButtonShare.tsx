import React from 'react';
import { Share } from 'react-native';
import ButtonSolid from './ButtonSolid';

interface buttonSimpleShare {
  mensagemShare: any,
  buttonTitle: string,
  icon?: any,
  color?: any,
  backgroundColor?: any,
}


export default function ButtonShare({ mensagemShare, buttonTitle, icon, color, backgroundColor }: buttonSimpleShare) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: mensagemShare,
      });
    } catch (error) {
      alert('Ocorreu um erro ao compartilhar, tete novamente mais tarde');
      console.log('ButtonShare (erro) => ', error);
    }
  }
  return (
    <>
      <ButtonSolid
        onPress={onShare}
        title={buttonTitle}
        icon={icon}
        color={color}
        backgroundColor={backgroundColor}
      />
    </>
  )
}
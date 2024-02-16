import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Typography } from '@mui/material'

interface AlertDialogProps {
  open: boolean // Controla se o Dialog está aberto ou fechado
  handleClose: () => void // Função para lidar com o fechamento do Dialog
  handleConfirm: () => void // Função para lidar com a confirmação
}

export const DialogAlert: React.FC<AlertDialogProps> = ({
  open,
  handleClose,
  handleConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography
          variant="h6"
          component="span"
          style={{ fontWeight: 'bold' }}
        >
          Confirma estar inserindo uma foto ou imagem do exame médico
          correspondente ao modelo?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Imagens incorretas podem comprometer a precisão dos resultados e
          afetar a análise. Sua seleção cuidadosa contribui diretamente para a
          confiabilidade do diagnóstico.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

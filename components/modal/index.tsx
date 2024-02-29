import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';

interface ModalProps {
  password: string;
  handleClose: () => void;
}

export function ModalPassword({password, handleClose}: ModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerPassword}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleClose}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={[styles.buttonText, styles.buttonSaveText]}>
              Salvar senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFF',
    width: '85%',
    paddingBottom: 24,
    paddingTop: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  innerPassword: {
    backgroundColor: '#0E0E0E',
    width: '90%',
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 14,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: '#392DE9',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  buttonSaveText: {
    color: '#FFF',
  },
});

import * as FileSystem from "expo-file-system";
import { FormData } from "../contexts/FormData";

const path = FileSystem.documentDirectory + "ciclo.txt";
export function useCalendarServices() {
  const create = async (data: FormData) => {
    const content = JSON.stringify(data);
    try {
      await FileSystem.writeAsStringAsync(path, content);
      console.log("Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  const loadData = async () => {
    try {
      const content = await FileSystem.readAsStringAsync(path);

      console.log({
        content,
      });
      return content;
    } catch (error) {
      console.error("Erro ao ler o arquivo:", { error });
    }
  };
  // const update = async (newData: any) => {
  //   const currentData = await getCalendar();
  //   const updatedData = { ...currentData, ...newData };
  //   await saveData(updatedData);
  // };

  // const getCalendar = async () => {
  //   try {
  //     const fileInfo = await FileSystem.getInfoAsync(fileUri);

  //     if (!fileInfo.exists) {
  //       console.log("Arquivo não encontrado, criando um novo...");
  //       await create({});
  //       // return userData;
  //     }

  //     const content = await FileSystem.readAsStringAsync(fileUri);
  //     return JSON.parse(content);
  //   } catch (error) {
  //     console.error("Erro ao carregar os dados:", error);
  //   }
  // };

  return {
    create,
    loadData,
    // update,
    // getCalendar,
  };
}

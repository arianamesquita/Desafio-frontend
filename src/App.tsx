import './App.css'
import { CreateInputs } from './components/Filters'
import { CreateTransfersList } from './components/TransfersList'
import { TransfersData } from './interface/TransfersData'
import { useTransfersData } from './hooks/UseTransfersData'
import dateFormat from 'dateformat';

function App() {
  const {data} = useTransfersData();

  return (
    <>
      <div className="container">
        <div className="app">
          <div className="app-center"> 
            <div>
              <CreateInputs/>
            </div> 
            <div className="second-body">
              <table>
                <tr>
                  <th>Data</th> 
                  <th>Valor</th>
                  <th>Tipo</th>
                  <th>Nome do Operador da Transação</th>
                </tr>
              </table>
              {data?.map(TransfersData => 
                <CreateTransfersList
                data={dateFormat(TransfersData.data_transferencia, "dd/mm/yyyy")}
                value={TransfersData.valor}
                type={TransfersData.tipo}
                name={TransfersData.nome_operador_transacao}
                />
              )}
            </div> 
          </div>
          

        </div>

      </div>
    </>
  )
}

export default App

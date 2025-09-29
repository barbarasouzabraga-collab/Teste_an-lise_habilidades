// VARIÁVEL GLOBAL: A Base de Dados JSON (com o novo campo 'ETAPA' incluído)
const baseDeHabilidades = [
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D026_M",
    "Habilidade": "Identificar instrumentos utilizados para medir determinadas grandezas (massa, comprimento, capacidade, tempo e temperatura).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D126_M",
    "Habilidade": "Corresponder cédulas e/ou moedas do Sistema Monetário Brasileiro.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D001_M",
    "Habilidade": "Reconhecer características do sistema de numeração decimal.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D010_M",
    "Habilidade": "Executar adição ou subtração com números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D009_M",
    "Habilidade": "Comparar ou ordenar quantidades pela contagem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D138_M",
    "Habilidade": "Identificar informações a partir de dados dispostos em tabelas simples.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "2EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D034_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D023_M",
    "Habilidade": "Reconhecer unidade de medida e/ou instrumento mais apropriado para medições de comprimento, tempo ou capacidade.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D030_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas de tempo na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D154_M",
    "Habilidade": "Resolver problemas que envolvam moedas/cédulas do Sistema Monetário Brasileiro.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D001_M",
    "Habilidade": "Reconhecer características do sistema de numeração decimal.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D008_M",
    "Habilidade": "Identificar composições ou decomposições de números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D004_M",
    "Habilidade": "Corresponder números naturais à sua escrita por extenso.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D033_M",
    "Habilidade": "Identificar informações a partir de dados dispostos em tabelas de dupla entrada.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D034_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "3EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D026_M",
    "Habilidade": "Identificar instrumentos utilizados para medir determinadas grandezas (massa, comprimento, capacidade, tempo e temperatura).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D022_M",
    "Habilidade": "Reconhecer horas em relógios digitais e/ou analógicos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D030_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas de tempo na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D008_M",
    "Habilidade": "Identificar composições ou decomposições de números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D026_M",
    "Habilidade": "Identificar instrumentos utilizados para medir determinadas grandezas (massa, comprimento, capacidade, tempo e temperatura).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D034_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D011_M",
    "Habilidade": "Executar operação de multiplicação entre números naturais, formados por até cinco algarismos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D033_M",
    "Habilidade": "Identificar informações a partir de dados dispostos em tabelas de dupla entrada.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "4EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D004_M",
    "Habilidade": "Corresponder números naturais à sua escrita por extenso.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D122_M",
    "Habilidade": "Corresponder o horário de início e de término com o intervalo de duração de um evento ou acontecimento.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D013_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da multiplicação ou da divisão, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D159_M",
    "Habilidade": "Identificar fração como representação que pode estar associada a diferentes significados.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critériods de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D123_M",
    "Habilidade": "Identificar as relações inversas entre as operações de adição, subtração, multiplicação e divisão.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Álgebra"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D168_M",
    "Habilidade": "Relacionar diferentes poliedros ou corpos redondos com suas planificações ou vistas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D144_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D181_M",
    "Habilidade": "Identificar a localização de números naturais em reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D139_M",
    "Habilidade": "Executar multiplicação ou divisão com números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D182_M",
    "Habilidade": "Num problema, estabelecer trocas entre cédulas e moedas do sistema monetário brasileiro, em função de seus valores.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "5EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D001_M",
    "Habilidade": "Reconhecer características do sistema de numeração decimal.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D025_M",
    "Habilidade": "Reconhecer a unidade de medida e/ou o instrumento mais apropriado para medições de massa, temperatura ou tempo.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D012_M",
    "Habilidade": "Utilizar números naturais, envolvendo diferentes significados da adição ou da subtração, na resolução de problemas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D139_M",
    "Habilidade": "Executar multiplicação ou divisão com números naturais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D159_M",
    "Habilidade": "Identificar fração como representação que pode estar associada a diferentes significados.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "6EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D137_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos de setores (pizza).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D025_M",
    "Habilidade": "Reconhecer a unidade de medida e/ou o instrumento mais apropriado para medições de massa, temperatura ou tempo.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D137_M",
    "Habilidade": "Identificar dados apresentados por meio de gráficos de setores (pizza).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D017_M",
    "Habilidade": "Identificar representações de figuras bidimensionais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D019_M",
    "Habilidade": "Identificar a localização ou a movimentação de pessoas ou objetos em uma representação plana do espaço.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D154_M",
    "Habilidade": "Resolver problemas que envolvam moedas/cédulas do Sistema Monetário Brasileiro.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "7EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D176_M",
    "Habilidade": "Resolver situação-problema que envolva porcentagem (cálculo de 10%, 25%, 50% ou 75%).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D003_M",
    "Habilidade": "Executar a contagem de um grupo de objetos/pessoas/animais.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D080_M",
    "Habilidade": "Resolver situações-problema envolvendo a interpretação de informações apresentadas em gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D182_M",
    "Habilidade": "Num problema, estabelecer trocas entre cédulas e moedas do sistema monetário brasileiro, em função de seus valores.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D183_M",
    "Habilidade": "Resolver situação-problema que envolva juros simples.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D176_M",
    "Habilidade": "Resolver situação-problema que envolva porcentagem (cálculo de 10%, 25%, 50% ou 75%).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "8EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D079_M",
    "Habilidade": "Resolver problema que envolva a leitura ou a interpretação de informações dispostas em tabelas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D005_M",
    "Habilidade": "Identificar números naturais segundo critérios de ordem.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D169_M",
    "Habilidade": "Identificar diferentes representações de um mesmo número racional.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D155_M",
    "Habilidade": "Resolver problema com números naturais, envolvendo diferentes significados das operações (adição, subtração, multiplicação, divisão, potenciação).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D080_M",
    "Habilidade": "Resolver situações-problema envolvendo a interpretação de informações apresentadas em gráficos.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D079_M",
    "Habilidade": "Resolver problema que envolva a leitura ou a interpretação de informações dispostas em tabelas.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Probabilidade e Estatística"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D018_M",
    "Habilidade": "Corresponder figuras tridimensionais às suas planificações.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Geometria"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D144_M",
    "Habilidade": "Utilizar conversão entre unidades de medidas na resolução de problema.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D182_M",
    "Habilidade": "Num problema, estabelecer trocas entre cédulas e moedas do sistema monetário brasileiro, em função de seus valores.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Grandezas e Medidas"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D183_M",
    "Habilidade": "Resolver situação-problema que envolva juros simples.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D176_M",
    "Habilidade": "Resolver situação-problema que envolva porcentagem (cálculo de 10%, 25%, 50% ou 75%).",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D170_M",
    "Habilidade": "Identificar a localização de números racionais na reta numérica.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  },
  {
    "ETAPA": "9EF",
    "DISCIPLINA": "Matemática",
    "ID_Habilidade": "D159_M",
    "Habilidade": "Identificar fração como representação que pode estar associada a diferentes significados.",
    "Percentual_Corte_A": 0.6,
    "Percentual_Corte_B": 0.8,
    "Percentual_Corte_C": 1,
    "Texto_orientacao_A": "Se ≤60%, focar em atividades de reforço visual.",
    "Texto_orientacao_B": "Se >60% e ≤80%, focar em exercícios de aplicação.",
    "Texto_orientacao_C": "Se >80%, focar em atividades de aprofundamento.",
    "UNIDADE TEMÁTICA": "Números"
  }
];

// Elementos da interface (DOM)
const inputContainer = document.getElementById("habilidades-input-container");
const gerarOrientacaoBtn = document.getElementById("gerarOrientacaoBtn");
const resultadoSection = document.getElementById("resultado-section");
const resultadoContainer = document.getElementById("resultado-container");
// NOVO ELEMENTO PARA O FILTRO
const etapaFilterContainer = document.getElementById("etapa-filter-container");

// ----------------------------------------------------
// 1. Lógica do Filtro de Etapa (Nova Função)
// ----------------------------------------------------

function obterEtapasUnicas() {
    const etapas = baseDeHabilidades.map(h => h.ETAPA);
    // Usa Set para obter valores únicos e sort() para ordenar
    return [...new Set(etapas)].sort();
}

function criarSeletorEtapa() {
    const etapasUnicas = obterEtapasUnicas();
    if (etapasUnicas.length === 0) return;

    let selectHTML = '<h3>1. Escolha a Etapa para Análise:</h3><select id="etapa-selector">';
    selectHTML += '<option value="">-- Selecione a Etapa --</option>';

    etapasUnicas.forEach(etapa => {
        selectHTML += `<option value="${etapa}">${etapa}</option>`;
    });

    selectHTML += '</select>';
    etapaFilterContainer.innerHTML = selectHTML;

    // Adiciona o listener para filtrar os inputs ao selecionar
    const seletorEtapa = document.getElementById('etapa-selector');
    seletorEtapa.addEventListener('change', filtrarEExibirInputs);

    // Esconde os inputs e botão até a escolha
    inputContainer.style.display = 'none';
    gerarOrientacaoBtn.style.display = 'none';
    resultadoSection.style.display = 'none';
}

// ----------------------------------------------------
// 2. Geração e Filtro do Formulário de Entrada (Ajustada)
// ----------------------------------------------------

function filtrarEExibirInputs() {
    const seletor = document.getElementById('etapa-selector');
    const etapaSelecionada = seletor.value;

    inputContainer.innerHTML = "";
    
    // Esconde tudo se nada estiver selecionado
    if (!etapaSelecionada) {
        inputContainer.style.display = 'none';
        gerarOrientacaoBtn.style.display = 'none';
        return;
    }

    const habilidadesFiltradas = baseDeHabilidades.filter(h => h.ETAPA === etapaSelecionada && h.Habilidade && h.ID_Habilidade);

    habilidadesFiltradas.forEach(habilidade => {
        const div = document.createElement("div");
        div.classList.add("habilidade-item");

        // REQUISIÇÃO 2: Remove a informação de Corte Intermediário
        const label = document.createElement("label");
        label.innerHTML = `<strong>${habilidade.ID_Habilidade} - ${habilidade.DISCIPLINA} (${habilidade.ETAPA}):</strong> ${habilidade.Habilidade}`;

        // Campo para digitar o percentual
        const input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.max = 100;
        input.step = 1;
        input.placeholder = "Acertos em % (ex: 75)";
        input.id = `input-${habilidade.ID_Habilidade}-${habilidade.ETAPA}`; 
        input.required = true;

        div.appendChild(label);
        div.appendChild(input);
        inputContainer.appendChild(div);
    });
    
    // Exibe os inputs e o botão de gerar
    inputContainer.style.display = 'block';
    gerarOrientacaoBtn.style.display = 'block';
    resultadoSection.style.display = 'none';
}

// ----------------------------------------------------
// 3. Lógica de Cálculo e Decisão (Tabela Ajustada)
// ----------------------------------------------------

gerarOrientacaoBtn.addEventListener("click", gerarOrientacoes);

function gerarOrientacoes() {
    resultadoContainer.innerHTML = "";
    
    // REQUISIÇÃO 3: Ajuste de colunas e nomes de cabeçalho
    let resultadosHTML = "<table><tr><th>Descritor (Etapa)</th><th>Acertos (%)</th><th>Texto da Orientação</th></tr>";

    let todosValidos = true;
    let acertosInvalidos = 0;

    // Itera sobre a base inteira, mas processa apenas os inputs que foram criados (da Etapa selecionada)
    baseDeHabilidades.forEach(habilidade => {
        // Encontra o input usando o ID composto
        const inputId = `input-${habilidade.ID_Habilidade}-${habilidade.ETAPA}`;
        const input = document.getElementById(inputId);
        
        // Se o input não existir (é de outra Etapa ou não foi criado), ignora.
        if (!input) return;

        // ... (Validação do Input) ...
        const acertosDigitados = input.value;
        const acertos = parseFloat(acertosDigitados) / 100;

        if (isNaN(acertos) || acertos < 0 || acertos > 1 || acertosDigitados === "") {
             input.style.border = "2px solid red";
             todosValidos = false;
             acertosInvalidos++;
             return; 
        }
        input.style.border = ""; // Limpa a borda vermelha se for válido

        const pcA = habilidade.Percentual_Corte_A;
        const pcB = habilidade.Percentual_Corte_B;
        let orientacaoTipo;
        let orientacaoTexto;
        let classeCor;
        
        // Lógica de Decisão (A, B ou C)
        if (acertos <= pcA) {
            orientacaoTipo = "A";
            orientacaoTexto = habilidade.Texto_orientacao_A;
            classeCor = "orientacao-A";
        } else if (acertos > pcA && acertos <= pcB) {
            orientacaoTipo = "B";
            orientacaoTexto = habilidade.Texto_orientacao_B;
            classeCor = "orientacao-B";
        } else {
            orientacaoTipo = "C";
            orientacaoTexto = habilidade.Texto_orientacao_C;
            classeCor = "orientacao-C";
        }

        // REQUISIÇÃO 3: Apenas Descritor, Acertos e Texto da Orientação
        resultadosHTML += `
            <tr class="${classeCor}">
                <td>${habilidade.ID_Habilidade} (${habilidade.ETAPA})</td>
                <td>${(acertos * 100).toFixed(0)}%</td>
                <td>${orientacaoTexto}</td>
            </tr>
        `;
    });

    if (!todosValidos) {
        resultadoContainer.innerHTML = `<p style="color: red; font-weight: bold;">⚠️ Por favor, preencha corretamente os ${acertosInvalidos} campos marcados em vermelho (valores de 0 a 100).</p>`;
        resultadoSection.style.display = "block";
        return;
    }

    resultadosHTML += "</table>";
    resultadoContainer.innerHTML = resultadosHTML;
    resultadoSection.style.display = "block";
}

// Inicializa: Cria o seletor de etapa assim que a página estiver pronta
criarSeletorEtapa();

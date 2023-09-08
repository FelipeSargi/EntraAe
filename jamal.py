#Vamos fazer um  sistema que Retorna a tabuada do número digitado

mult = 0
i = 1
cont = 0

print("__Tabuada automática__\n")
while cont==0:
  num = int(input("Digite o Número da Tabuada:  "))
  while i<=10:
    print(num," x ",i," = ",i*num)
    i = i+1
  i = 1
  op = input("Deseja ver outra tabuada??  S ou N :")
  if op=="N" or op=="n"
    cont = 1

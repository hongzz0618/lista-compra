import os
import glob

files = glob.glob('C:/Users/cf17h/lista_compra_fitness-angular-ionic/src/app/**/*.spec.ts', recursive=True)

for f in files:
    try:
        os.remove(f)
    except OSError as e:
        print("Error: %s : %s" % (f, e.strerror))
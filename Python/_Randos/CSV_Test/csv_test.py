# Created Date	
# Company	Final Selected Booth	
# Short Paragraph Company Description	
# What is your company's website?	
# Full Name	Title	Exhibitor Comp #1 - Name	
# Exhibitor Comp #1 - Job Title	
# Exhibitor Comp #2 - Name	
# Exhibitor Comp #2 - Job Title	
# Please upload your company logo (.eps, .png , .jpg)
import csv

with open('exhibs_floorplan.csv') as f:
    reader = csv.DictReader(f, delimiter=',')
    i = 0
    for row in reader:
        if i == 0:
            print(f'Column names are {", ".join(row)}')
            i += 1
        else:
            
            i += 1
    print(f'Processed {i} lines.')




# with open('employee_file.csv', mode='w') as employee_file:
#     employee_writer = csv.writer(employee_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

#     employee_writer.writerow(['John Smith', 'Accounting', 'November'])
#     employee_writer.writerow(['Erica Meyers', 'IT', 'March'])



# with open('employee_file2.csv', mode='w') as csv_file:
#     fieldnames = ['emp_name', 'dept', 'birth_month']
#     writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

#     writer.writeheader()
#     writer.writerow({'emp_name': 'John Smith', 'dept': 'Accounting', 'birth_month': 'November'})
#     writer.writerow({'emp_name': 'Erica Meyers', 'dept': 'IT', 'birth_month': 'March'})
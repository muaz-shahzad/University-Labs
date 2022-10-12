--select (UnitPrice*Quantity)  as Priceofanorder from [Order Details]

--select DISTINCT City from Employees

--Select FirstName + ' ' + LastName as Name from Employees
--Select FirstName as Name from Employees where FirstName like 'A%'
--Select FirstName from Employees
--Select City from Customers  where City like '%A'
--Select City from Customers
--Select FirstName + ' ' + LastName as Name from Employees
--Select FirstName + ' ' + LastName as Name  from Employees where FirstName Like '%an%' Or LastName  Like '%an%'


--Select * from [Order Details] where UnitPrice BETWEEN 10 AND 40

--Select CompanyName from Customers where Region is Null

--Select * from Products where UnitPrice Not In ('10','12','15','17','19')


--Select MAX(UnitPrice) as [max price] , MIN(UnitPrice) as [min price], SUM(UnitPrice) as [sum price], AVG(UnitPrice) as [AVG price] from Products group by (Categoryid) having Max(UnitPrice) BETWEEN 50 AND  100
 --Select COUNT(CustomerID) as Noofcustomer, Region from Customers group by region having Region is Not Null

 --Select * from Customers where region is Not Null


--Select COUNT(CustomerID) as [No of Customers], Region from Customers group by Region having Region is Not Null


--Select COUNT(ContactName) as [No of Contact Name], ContactTitle from Customers group by ContactTitle Order by (ContactTitle) DESC

--Select COUNT(OrderID) as [Total Order],ProductID from [Order Details] group by ProductID having COUNT(OrderID) > 50
--Select OrderID,ProductID from [Order Details]

--Select COUNT(EmployeeID) as [No Of Employess],City from Employees group by City having COUNT(EmployeeID) >= 2


--Select ProductName from Products where ProductName Like '_______' union select ContactName from Suppliers where not ContactName Like '%Dirk%'

--select * from Orders

--select DISTINCT City from Customers where Country = 'Germany' union select DISTINCT City from Suppliers where Country = 'Germany'
--Select City from Customers UNION ALL Select City from Suppliers
--select ContactName,City,Country from Customers union select ContactName,City,Country from Suppliers
--Select * from Orders order by CustomerID
--Select * from Customers
--SELECT Orders.OrderID, Customers.ContactTitle, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID

--SELECT Customers.Companyname, Orders.OrderID FROM Orders LEFT JOIN Customers ON  Orders.CustomerID = Customers.CustomerID 
--ORDER BY Customers.Companyname;
 --Select Produc,CategoryName from Products Left Join Categories Products On 
 --Select Products.ProductName, Categories.CategoryName From Products Left Join Categories ON Products.CategoryID = Categories.CategoryID where Categories.CategoryName Like 'B%'

 --create database new_database

 --create table employee
 --(
 -- P_id int,
 -- Fname Varchar(20) Not NULL,
 --  lname Varchar(20),
	--DOB date,
	--Primary Key (P_id)

 --);

--create view Managers as 
--select  a.Firstname+' '+a.Lastname as Employee 
--,b.Firstname+' '+b.Lastname as Manager from employees a,employees b  where a.reportsto=b.employeeid 

--Select * from Employees

--Select * from Managers

--Create View Managerviews
--AS
--Select a.Firstname+' '+a.Lastname  as Employee From Employees , b.Firstname+' '+b.Lastname  as Manager From Employees where a.EmployeeID = b.reportsid


--Create View Manager_View
--AS
--Select e1.Firstname , e1.Lastname, e1.EmployeeID From Employees e1 inner join Employees e2 On e1.EmployeeID = e2.Reportsto

--Select * from Managers


--Select * from Categories


--Create view [ProductsByCategory]
--AS
--Select CategoryName, ProductName from Categories,Products

--Select * from [ProductsByCategory]

--Alter Procedure First_SP
--@value int
--AS 
--Begin
--Select ProductID,ProductName , Unitprice from Products where unitprice > @value
--END
--GO

--exec [dbo].[First_SP] 30

--Select * from Products


--Select * from Employees


--Create Procedure AllCustomers
--@City nvarchar(30), @Title nvarchar(30)
--AS
--Begin
--Select * from Employees where City = @City AND Title = @Title
--END
--GO


--exec [dbo].[AllCustomers] 'London' , 'Sales Manager'

--Create Procedure Customerrecords
--@CustomerID nvarchar(20)
--AS
--BEGIN
--Select * from Customers where CustomerID = @CustomerID
--END
--GO

--exec [dbo].[Customerrecords] 'ALFKI' 

Create Table Employee_Demoo
(
  Emp_ID int identity,
  Emp_Name varchar(30),
  Emp_Sal decimal(10,2)
)

Insert into Employee_Demoo values ('Muaz',1000);
Insert into Employee_Demoo values ('Shahzad',1200);
Insert into Employee_Demoo values ('Talha',1100);
Insert into Employee_Demoo values ('Shahab',1300);
Insert into Employee_Demoo values ('Awais',1400);
 


 create table Employee_Demo_Audits
(
 Emp_ID int,
 Emp_Name varchar(55),
 Emp_Sal decimal(10,2),
 Audit_Action varchar(100),
 Audit_Timestamp datetime
) 
Create trigger trgAfterInsert on Employee_Demoo
For Insert
AS
declare @empid int, @empname varchar(55), @empsal char( 100) ,@audit_action varchar(50); 
select @empid=i.Emp_ID from inserted i; 
select  @empname=i.Emp_Name from inserted i; 
select @empsal=i.Emp_Sal from inserted i; 

set @audit_action='Inserted Record -- After Insert Trigger.'; 

PRINT 'AFTER INSERT trigger fired.' 
insert into Employee_Demoo(Emp_Name,Emp_Sal)values ('Aasad',1000);

select * from Employee_Demoo
select * from Employee_Demo_Audits

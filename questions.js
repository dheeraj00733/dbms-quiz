const TOPICS = [
  "Introduction to Data",
  "Relational DB Fundamentals",
  "SQL Command Categories",
  "SQL Retrieving Data",
  "SQL Functions",
  "GROUP BY and CASE",
  "Window Functions",
  "Subqueries",
  "Joins & Set Operations",
  "Data Modelling & ER"
];

const QUESTIONS = [

// ─────────────────────────────────────────
// TOPIC 0 – Introduction to Data (35 Qs)
// ─────────────────────────────────────────
[
{q:"What is 'data' in the context of information systems?",trap:false,
 opts:["Processed information ready for decision-making","Raw, unprocessed facts and figures","A collection of related tables","A programming language for databases"],
 ans:1,
 exps:["Incorrect. Processed information is called 'information', not data. Data becomes information after processing.","✓ Correct. Data is raw, unorganized facts that have not yet been processed into meaningful form.","Incorrect. A collection of related tables describes a relational database, not data itself.","Incorrect. SQL is an example of a database language, not the definition of data."]},

{q:"Which of the following is an example of STRUCTURED data?",trap:false,
 opts:["Email messages","Social media posts","A customer table in a relational database","Video files"],
 ans:2,
 exps:["Incorrect. Emails are semi-structured or unstructured — they have headers but free-form body text.","Incorrect. Social media posts are unstructured data — no fixed schema.","✓ Correct. A relational table has a fixed schema with rows and columns — the definition of structured data.","Incorrect. Video files are unstructured binary data with no inherent rows/columns schema."]},

{q:"Which category does JSON data belong to?",trap:true,
 opts:["Structured","Unstructured","Semi-structured","Relational"],
 ans:2,
 exps:["Incorrect. Structured data fits into fixed schemas (rows/columns). JSON is flexible.","Incorrect. Unstructured means no identifiable structure at all — JSON has self-describing tags.","✓ Correct. JSON is semi-structured — it has tags/keys but doesn't conform to a rigid schema like a relational table.","Incorrect. Relational is a storage model, not a data category type."]},

{q:"What is the primary industrial need for data management?",trap:false,
 opts:["To replace human workers entirely","To enable informed decision-making and operational efficiency","To slow down database queries for security","To prevent data from being shared across departments"],
 ans:1,
 exps:["Incorrect. Data management aims to augment, not replace human workers in most contexts.","✓ Correct. Organizations manage data primarily to derive insights, enable decisions, and improve efficiency.","Incorrect. Slowing down queries is never a goal — performance is a concern.","Incorrect. Data sharing across departments is often a goal, not something to prevent."]},

{q:"Which of the following is NOT a limitation of file-based storage systems?",trap:true,
 opts:["Data redundancy","Data inconsistency","Difficulty in data access","Support for concurrent multi-user access with locking"],
 ans:3,
 exps:["Incorrect — this IS a limitation. File systems often duplicate data across files, wasting storage.","Incorrect — this IS a limitation. Multiple copies of the same data can easily get out of sync.","Incorrect — this IS a limitation. Complex queries on flat files require custom programs.","✓ Correct. File-based systems do NOT properly support concurrent access — that's a limitation, not a feature they have. This is the one that is NOT a limitation (it's something they lack)."]},

{q:"Data redundancy in file-based systems means:",trap:false,
 opts:["Data is compressed multiple times","The same data is stored in multiple places unnecessarily","Data is encrypted redundantly","Queries run multiple times for accuracy"],
 ans:1,
 exps:["Incorrect. Compression is unrelated to redundancy in file systems.","✓ Correct. Redundancy means the same data (e.g., a customer's address) is duplicated across multiple files, wasting space and causing inconsistency.","Incorrect. Encryption redundancy is not the meaning here.","Incorrect. Query repetition is not what redundancy refers to."]},

{q:"A DBMS stands for:",trap:false,
 opts:["Data Backup Management System","Database Management System","Data Business Model Structure","Distributed Binary Management System"],
 ans:1,
 exps:["Incorrect. DBMS does not stand for Data Backup Management System.","✓ Correct. DBMS = Database Management System — software that manages creation, access, and control of databases.","Incorrect. This is a fabricated expansion.","Incorrect. This is a fabricated expansion."]},

{q:"Which of the following is a primary function of a DBMS?",trap:false,
 opts:["Compiling source code","Providing a systematic way to create, retrieve, update, and delete data","Managing CPU scheduling","Rendering web pages"],
 ans:1,
 exps:["Incorrect. Source code compilation is the job of a compiler, not a DBMS.","✓ Correct. CRUD (Create, Read, Update, Delete) operations are the core function of a DBMS.","Incorrect. CPU scheduling is an OS function.","Incorrect. Web rendering is handled by browsers/web servers."]},

{q:"Which of the following is a Relational Database Management System?",trap:false,
 opts:["MongoDB","Redis","PostgreSQL","Cassandra"],
 ans:2,
 exps:["Incorrect. MongoDB is a NoSQL document database — data is stored as JSON-like documents.","Incorrect. Redis is a key-value store — a NoSQL in-memory database.","✓ Correct. PostgreSQL is a full-featured RDBMS that uses SQL and stores data in tables with relationships.","Incorrect. Cassandra is a NoSQL wide-column store designed for massive distributed data."]},

{q:"Which of the following is a Non-Relational (NoSQL) database?",trap:false,
 opts:["MySQL","Oracle DB","Microsoft SQL Server","MongoDB"],
 ans:3,
 exps:["Incorrect. MySQL is a classic relational database using SQL and tables.","Incorrect. Oracle DB is one of the most established relational databases.","Incorrect. Microsoft SQL Server is a relational database.","✓ Correct. MongoDB is a NoSQL document database, storing data in flexible JSON-like documents (BSON)."]},

{q:"What problem does a DBMS solve that flat files do not?",trap:false,
 opts:["Making data human-readable","Providing data independence, concurrency control, and integrity","Converting data to binary","Sending data over a network"],
 ans:1,
 exps:["Incorrect. Both files and DBMS can store human-readable data.","✓ Correct. DBMS provides data independence (schema changes don't break apps), concurrency control (multi-user access), and integrity constraints — none of which flat files offer.","Incorrect. Both files and databases store binary data internally.","Incorrect. Networking is handled by the OS/network stack, not specifically a DBMS feature."]},

{q:"'Data independence' in DBMS means:",trap:true,
 opts:["Data can be accessed without a password","Changes to data storage structure don't affect application programs","Data is stored independently on different servers","Users can modify data without authorization"],
 ans:1,
 exps:["Incorrect. Password-free access relates to authentication, not data independence.","✓ Correct. Data independence means applications are insulated from changes in physical/logical storage. Two types: physical (storage changes don't affect logical schema) and logical (schema changes don't affect applications).","Incorrect. Distributed storage is related to replication/sharding, not data independence.","Incorrect. This describes an authorization problem, not data independence."]},

{q:"Which type of NoSQL database stores data as key-value pairs?",trap:false,
 opts:["Document store","Column-family store","Graph database","Key-value store"],
 ans:3,
 exps:["Incorrect. Document stores (like MongoDB) store JSON/BSON documents, not simple key-value pairs.","Incorrect. Column-family stores (like Cassandra) organize data in column families, not key-value pairs.","Incorrect. Graph databases store nodes and edges for relationship-heavy data.","✓ Correct. Key-value stores (like Redis, DynamoDB) use a simple dictionary-like structure: a unique key maps to a value."]},

{q:"The 'data inconsistency' problem in file systems occurs because:",trap:false,
 opts:["Files are too large to open","The same data stored in multiple files can get updated in one file but not others","Data encryption fails","File permissions are incorrectly set"],
 ans:1,
 exps:["Incorrect. File size is not the cause of data inconsistency.","✓ Correct. When data is duplicated across files (redundancy), updating one copy without updating others causes inconsistency — e.g., a customer's phone number updated in one file but not another.","Incorrect. Encryption failures are a security issue, not a consistency issue.","Incorrect. Permissions are an access control issue."]},

{q:"Which of the following best describes a 'database'?",trap:false,
 opts:["A single flat file containing all company records","An organized collection of structured data stored electronically","A programming language for data manipulation","A hardware device for data storage"],
 ans:1,
 exps:["Incorrect. A single flat file is not a database — it lacks organization, relationships, and query capability.","✓ Correct. A database is an organized, electronic collection of structured data that can be easily accessed, managed, and updated.","Incorrect. SQL is a language, not a database itself.","Incorrect. A hard drive is hardware; a database is software/logical."]},

{q:"TRAP: A DBMS and a Database are the same thing.",trap:true,
 opts:["True — they refer to the same software","False — DBMS is the software that manages the database; the database is the actual data","True — both store data in tables","False — a database is software; DBMS is just the data files"],
 ans:1,
 exps:["Incorrect. This is the classic trap. They are different things entirely.","✓ Correct. The DATABASE is the actual organized collection of data. The DBMS is the software system (like PostgreSQL, MySQL) used to create, manage, and interact with that data.","Incorrect. Not all databases store data in tables — NoSQL databases do not.","Incorrect. This reverses the definitions."]},

{q:"Which of the following is an advantage of a DBMS over file systems?",trap:false,
 opts:["Higher hardware cost","Reduced data redundancy through normalization","More complex query syntax","Requires manual backup by users"],
 ans:1,
 exps:["Incorrect. Higher cost is a disadvantage, not an advantage.","✓ Correct. DBMS supports normalization to eliminate redundant data storage, keeping data consistent and saving space.","Incorrect. SQL actually simplifies querying compared to writing custom programs for each file operation.","Incorrect. DBMS provides automated backup and recovery mechanisms."]},

{q:"In which scenario would a NoSQL database be preferred over a relational database?",trap:false,
 opts:["Storing financial transactions requiring strict ACID compliance","Handling massive unstructured social media data at high velocity","Managing a small inventory with fixed attributes","Running complex JOIN queries across multiple tables"],
 ans:1,
 exps:["Incorrect. Financial transactions require strict ACID properties — RDBMS is preferred.","✓ Correct. NoSQL databases excel at handling large volumes of unstructured/semi-structured data at high speed, like social media feeds, logs, or sensor data.","Incorrect. A small inventory with fixed attributes is perfectly suited to a relational database.","Incorrect. Complex JOINs are a strength of relational databases; NoSQL typically doesn't support them."]},

{q:"What does 'metadata' mean in the context of a database?",trap:false,
 opts:["The actual data rows stored in the database","Data about data — describing the structure, format, and constraints","Encrypted data","Backup copies of data"],
 ans:1,
 exps:["Incorrect. The actual rows are simply called data or records.","✓ Correct. Metadata is 'data about data' — it describes the structure of the database: table names, column names, data types, constraints, indexes, etc. Stored in the data dictionary/system catalog.","Incorrect. Encrypted data is still data, not metadata.","Incorrect. Backup copies are redundant data, not metadata."]},

{q:"Which of the following describes 'data integrity' in a DBMS?",trap:false,
 opts:["Encrypting data so it cannot be read by unauthorized users","Ensuring data is accurate, consistent, and valid according to defined rules","Making data available 24/7 without downtime","Compressing data to save storage space"],
 ans:1,
 exps:["Incorrect. That describes data security/confidentiality.","✓ Correct. Data integrity ensures data accuracy and consistency through constraints (NOT NULL, PRIMARY KEY, FOREIGN KEY) and validation rules.","Incorrect. That describes high availability.","Incorrect. Compression is a storage optimization technique."]},

{q:"The 'data dictionary' (system catalog) in a DBMS stores:",trap:true,
 opts:["The actual business data like customer names and orders","Metadata — descriptions of tables, columns, data types, and constraints","User passwords only","Backup transaction logs"],
 ans:1,
 exps:["Incorrect. Business data is stored in user tables, not the data dictionary.","✓ Correct. The data dictionary (also called system catalog) stores metadata — the definitions and descriptions of all database objects: table names, column names, data types, constraints, indexes, views, etc.","Incorrect. Passwords may be stored elsewhere; the catalog is about structure.","Incorrect. Transaction logs are stored separately."]},

{q:"Which of the following is NOT a type of NoSQL database?",trap:false,
 opts:["Document store","Key-value store","Relational store","Graph database"],
 ans:2,
 exps:["Incorrect — Document store IS a NoSQL type (e.g., MongoDB).","Incorrect — Key-value store IS a NoSQL type (e.g., Redis).","✓ Correct. 'Relational store' is not a NoSQL type — it IS the relational model (RDBMS). NoSQL databases are everything but relational.","Incorrect — Graph database IS a NoSQL type (e.g., Neo4j)."]},

{q:"Concurrency control in a DBMS ensures:",trap:false,
 opts:["Only one user can ever access the database","Multiple users can access the database simultaneously without corrupting data","Data is always encrypted during concurrent access","Database queries run faster with multiple users"],
 ans:1,
 exps:["Incorrect. DBMS supports multi-user access — restricting to one user defeats the purpose.","✓ Correct. Concurrency control mechanisms (locks, MVCC, transactions) ensure that simultaneous access by multiple users doesn't lead to data corruption, lost updates, or dirty reads.","Incorrect. Encryption is about security, not concurrency.","Incorrect. Multiple simultaneous users can actually slow queries — concurrency control is about correctness, not speed."]},

{q:"Which of the following describes 'physical data independence'?",trap:true,
 opts:["Users cannot see the physical disk location of data","Changing the physical storage (e.g., adding an index, changing file organization) does not affect the logical schema or applications","Physical servers are independent of the database","Data can be physically deleted without logical impact"],
 ans:1,
 exps:["Incorrect. While users don't typically see disk locations, that's not the definition.","✓ Correct. Physical data independence means the logical schema is insulated from physical storage changes. You can reorganize storage, add indexes, or change file structures without changing how applications see the data.","Incorrect. Server independence is a hardware/infrastructure concept.","Incorrect. Physical deletion affecting logical data is the opposite of independence."]},

{q:"What is a 'data model'?",trap:false,
 opts:["A physical server that stores data","An abstract framework that describes how data is organized, stored, and accessed","A programming model for writing database queries","A backup copy of all database tables"],
 ans:1,
 exps:["Incorrect. Physical servers are hardware infrastructure.","✓ Correct. A data model is an abstract representation of how data is logically organized (e.g., relational model uses tables, NoSQL uses documents/graphs/etc.), including its structure, operations, and constraints.","Incorrect. Query programming models are part of the language layer, not the data model itself.","Incorrect. Backups are copies of data, not models."]},

{q:"Which of the following is a characteristic of big data?",trap:false,
 opts:["Small volume, high value","High Volume, high Velocity, and high Variety (3 Vs)","Low variety, low velocity","Structured only, no unstructured data"],
 ans:1,
 exps:["Incorrect. Big data is characterized by its massive scale, not small volume.","✓ Correct. Big data is defined by the 3 Vs: Volume (massive amounts), Velocity (high speed of generation), and Variety (structured, semi-structured, and unstructured types).","Incorrect. This is the opposite — big data has high variety and velocity.","Incorrect. Big data is predominantly unstructured or semi-structured."]},

{q:"A file-based system has difficulty handling which of the following?",trap:false,
 opts:["Storing simple text documents","Supporting concurrent multi-user access with transaction safety","Displaying data in plain text format","Reading a single file sequentially"],
 ans:1,
 exps:["Incorrect. File systems are fine for simple document storage.","✓ Correct. File-based systems lack transaction management and proper locking, making concurrent multi-user access unsafe and error-prone.","Incorrect. Plain text display is trivial for file systems.","Incorrect. Sequential file reading is a basic file system capability."]},

{q:"What is the role of a DBA (Database Administrator)?",trap:false,
 opts:["Write application code that queries the database","Manage, maintain, and secure the database system including backups, performance tuning, and user access","Design the user interface for database applications","Translate business requirements into programming code"],
 ans:1,
 exps:["Incorrect. Writing application query code is typically the developer's role.","✓ Correct. A DBA is responsible for installation, configuration, backup/recovery, performance tuning, security/access control, and ongoing maintenance of the database system.","Incorrect. UI design is a front-end developer/designer role.","Incorrect. Translating requirements to code is a developer's role."]},

{q:"TRAP: All databases must use SQL.",trap:true,
 opts:["True — SQL is the universal database language","False — NoSQL databases use other query languages like MQL, CQL, or Gremlin","True — even NoSQL databases internally use SQL","False — databases don't need any query language"],
 ans:1,
 exps:["Incorrect. SQL is for relational databases. NoSQL databases have their own query languages.","✓ Correct. SQL is for RDBMS only. MongoDB uses MQL (MongoDB Query Language), Cassandra uses CQL, Neo4j uses Cypher/Gremlin. NoSQL = 'Not Only SQL'.","Incorrect. NoSQL databases do not use SQL internally — they have their own storage engines.","Incorrect. All databases have some form of query interface, even if not SQL."]},

{q:"Which of the following best describes 'data security' in DBMS?",trap:false,
 opts:["Backing up data every hour","Controlling who can access, modify, or delete data through authentication and authorization","Making data available faster","Reducing the size of stored data"],
 ans:1,
 exps:["Incorrect. Hourly backups relate to data recovery, not security.","✓ Correct. Data security involves authentication (verifying user identity), authorization (controlling what operations users can perform via GRANT/REVOKE), and sometimes encryption.","Incorrect. Performance optimization is not security.","Incorrect. Data compression is a storage optimization, not security."]},

{q:"In a file-based system, if two programs use the same data, what typically happens?",trap:false,
 opts:["The data is automatically synchronized","Each program maintains its own separate copy, leading to redundancy and inconsistency","Files are merged automatically","One program locks the other out permanently"],
 ans:1,
 exps:["Incorrect. File systems don't automatically sync data across different program files.","✓ Correct. In file-based systems, each application typically has its own data files. This leads to duplication (redundancy) and when one app updates its copy, the other's copy becomes stale (inconsistency).","Incorrect. Automatic merging is not a feature of traditional file-based systems.","Incorrect. Permanent locking is not typical — usually both programs can write, causing corruption."]},

{q:"What is 'data abstraction' in a DBMS?",trap:false,
 opts:["Hiding irrelevant implementation details and showing only the relevant aspects to users","Compressing data to abstract its size","Making all data publicly visible","Abstracting data into physical bit patterns"],
 ans:0,
 exps:["✓ Correct. Data abstraction hides complexity from users. DBMS provides three levels: Physical (how data is stored), Logical (what data is stored and relationships), View (what specific users see — a subset/custom view).","Incorrect. Compression reduces size but doesn't provide the conceptual layering of abstraction.","Incorrect. Making all data public would be the opposite of controlled abstraction.","Incorrect. Bit patterns are the physical level — abstraction hides this from users."]},

{q:"Which of the following is a disadvantage of using a DBMS?",trap:true,
 opts:["Data redundancy increases","High initial cost, complexity, and resource requirements","Data integrity cannot be enforced","Concurrent access is impossible"],
 ans:1,
 exps:["Incorrect. DBMS actually reduces redundancy — that's an advantage.","✓ Correct. DBMS disadvantages include high initial cost (licensing, hardware), complexity (requires trained DBAs), and high resource requirements (CPU, memory). For small, simple use cases, a file might be more appropriate.","Incorrect. Data integrity is a key strength of DBMS — enforced via constraints.","Incorrect. Concurrent access with proper control is a feature, not a limitation."]},

{q:"The three levels of DBMS architecture are:",trap:false,
 opts:["Input, Process, Output","Physical, Logical, View (External)","Hardware, Software, Network","DDL, DML, DCL"],
 ans:1,
 exps:["Incorrect. Input-Process-Output is the general computing model, not DBMS architecture.","✓ Correct. The ANSI/SPARC three-schema architecture: Physical/Internal level (how stored), Conceptual/Logical level (what stored, relationships), External/View level (user-specific subsets of data).","Incorrect. These are infrastructure tiers, not DBMS schema levels.","Incorrect. DDL/DML/DCL are SQL command categories, not architectural levels."]},

{q:"'Atomicity' in database transactions means:",trap:false,
 opts:["Transactions are broken into small atoms for efficiency","Either all operations in a transaction complete successfully, or none do","Each transaction runs on a separate CPU atom","Data is stored in atomic units of bytes"],
 ans:1,
 exps:["Incorrect. 'Atom' here is metaphorical — meaning indivisible, not literally CPU atoms.","✓ Correct. Atomicity is the 'A' in ACID. A transaction is atomic — it's all-or-nothing. If any part fails, the entire transaction is rolled back, leaving the database as if it never happened.","Incorrect. Transactions run on normal database threads/processes.","Incorrect. Bytes are storage units; not related to transaction atomicity."]},

{q:"Which of the following is NOT part of ACID properties?",trap:true,
 opts:["Atomicity","Consistency","Independence","Durability"],
 ans:2,
 exps:["Incorrect. Atomicity IS part of ACID — the 'A'.","Incorrect. Consistency IS part of ACID — the 'C'.","✓ Correct. ACID stands for Atomicity, Consistency, Isolation, Durability. 'Independence' is NOT one of the properties. The 'I' is Isolation, not Independence.","Incorrect. Durability IS part of ACID — the 'D'."]},
],

// ─────────────────────────────────────────
// TOPIC 1 – Relational DB Fundamentals (40 Qs)
// ─────────────────────────────────────────
[
{q:"In relational database terminology, a 'relation' refers to:",trap:false,
 opts:["A foreign key relationship between two tables","A table (a set of tuples/rows with attributes)","The JOIN operation between tables","A constraint linking two columns"],
 ans:1,
 exps:["Incorrect. That describes a referential relationship, not a 'relation'.","✓ Correct. In relational theory, a 'relation' is a mathematical table — a set of tuples (rows) where each tuple has the same attributes (columns). The relational model is based on this set-theoretic concept.","Incorrect. JOIN is an operation on relations, not the definition of a relation itself.","Incorrect. Constraints are rules on a relation, not the relation itself."]},

{q:"An 'attribute' in a relational database is:",trap:false,
 opts:["A row in a table","A column (property/characteristic) of an entity","A complete database record","A relationship between two tables"],
 ans:1,
 exps:["Incorrect. A row is a tuple/record.","✓ Correct. An attribute is a column — it represents a property or characteristic of the entity. For example, in a Student table, 'name', 'age', 'email' are attributes.","Incorrect. A complete record is a tuple (row).","Incorrect. A relationship is a connection between entities, not an attribute."]},

{q:"A 'tuple' in relational database theory corresponds to:",trap:false,
 opts:["A column in a table","A single row/record in a table","The table schema","A database constraint"],
 ans:1,
 exps:["Incorrect. A column is an attribute.","✓ Correct. A tuple is a single row (record) in a relation. If a table has 100 rows, it has 100 tuples.","Incorrect. The schema describes the structure (attribute names and types), not a single record.","Incorrect. Constraints are rules enforced on data."]},

{q:"The 'degree' of a relation refers to:",trap:true,
 opts:["The number of rows (tuples) in the table","The number of columns (attributes) in the table","The number of foreign keys in the table","The number of tables in the database"],
 ans:1,
 exps:["Incorrect. The number of rows is called the 'cardinality' of the relation.","✓ Correct. The degree of a relation is the number of attributes (columns). A relation with 5 columns has degree 5. Don't confuse with cardinality (row count).","Incorrect. Foreign key count is not a standard relation measurement.","Incorrect. The number of tables is the size of the schema, not the degree of a relation."]},

{q:"The 'cardinality' of a relation refers to:",trap:true,
 opts:["The number of columns (attributes) in the table","The number of rows (tuples) in the table","The relationship type between entities (1:1, 1:N, M:N)","The primary key constraint"],
 ans:1,
 exps:["Incorrect. Number of columns is the 'degree', not cardinality.","✓ Correct. Cardinality of a relation = number of tuples (rows). A table with 500 records has a cardinality of 500. Note: 'cardinality' also appears in ER modeling for relationship types — context matters!","Incorrect. 1:1, 1:N, M:N is relationship cardinality in ER modeling — a different use of the same term.","Incorrect. Primary key is a constraint, not cardinality."]},

{q:"A PRIMARY KEY must satisfy which conditions?",trap:false,
 opts:["Can contain NULL values but must be unique","Must be UNIQUE and NOT NULL","Can have duplicate values if declared as primary","Must reference a foreign key"],
 ans:1,
 exps:["Incorrect. A PRIMARY KEY cannot contain NULL — this violates entity integrity.","✓ Correct. Primary key constraints: (1) UNIQUE — no two rows have the same PK value, and (2) NOT NULL — every row must have a PK value. Together this ensures each row is uniquely identifiable.","Incorrect. Duplicate primary key values are impossible — uniqueness is mandatory.","Incorrect. A primary key doesn't need to reference anything; foreign keys reference primary keys."]},

{q:"What is a CANDIDATE KEY?",trap:false,
 opts:["A foreign key that is a candidate for promotion","Any column that could potentially serve as a primary key (minimal superkey)","A key used only in candidate tables","A key that contains NULL values"],
 ans:1,
 exps:["Incorrect. Candidate keys have nothing to do with foreign key promotion.","✓ Correct. A candidate key is a minimal superkey — any set of attributes that can uniquely identify every row with no redundant attributes. A table can have multiple candidate keys; one is chosen as the primary key.","Incorrect. 'Candidate tables' is not a real concept.","Incorrect. Candidate keys, like primary keys, cannot contain NULL values."]},

{q:"A SUPER KEY is:",trap:true,
 opts:["A key that is always a single column","Any set of attributes that can uniquely identify a row (may have extra attributes)","A key only on numeric columns","The same as a primary key"],
 ans:1,
 exps:["Incorrect. A super key can be a combination of multiple columns.","✓ Correct. A superkey is any combination of attributes that uniquely identifies rows. It may include extra (non-minimal) attributes. All candidate keys are superkeys, but not all superkeys are candidate keys.","Incorrect. Super keys can be on any data type.","Incorrect. A primary key is a special (chosen) candidate key, which is a minimal superkey — not all superkeys are primary keys."]},

{q:"A FOREIGN KEY:",trap:false,
 opts:["Must always reference the primary key of the same table","References the primary key (or unique key) of another table, enforcing referential integrity","Can contain any value without restriction","Is always the same as the primary key of its table"],
 ans:1,
 exps:["Incorrect. A foreign key can reference the same table (self-referencing), but primarily references other tables.","✓ Correct. A foreign key is a column (or set of columns) in a child table that references the primary key (or unique key) of a parent table, enforcing referential integrity — every FK value must exist as a PK in the parent.","Incorrect. Foreign key values are restricted — they must either be NULL or match an existing value in the referenced table.","Incorrect. A foreign key in a child table references another table's primary key, not its own."]},

{q:"TRAP: A table can have only one UNIQUE constraint.",trap:true,
 opts:["True — only one column can be unique per table","False — a table can have multiple UNIQUE constraints, but only one PRIMARY KEY","True — PRIMARY KEY and UNIQUE are the same thing","False — UNIQUE constraints are not allowed if a PRIMARY KEY exists"],
 ans:1,
 exps:["Incorrect. Multiple columns can each have their own UNIQUE constraint.","✓ Correct. A table can have only ONE primary key, but MULTIPLE unique constraints. For example, a user table might have unique email AND unique phone number as separate UNIQUE constraints.","Incorrect. PRIMARY KEY is UNIQUE + NOT NULL; UNIQUE alone allows NULL (one NULL per unique column in most DBMS).","Incorrect. Both can coexist — the PK has its uniqueness and additional columns can also be unique."]},

{q:"What does 'Entity Integrity' ensure?",trap:false,
 opts:["Every entity has at least one foreign key","No primary key attribute can be NULL","All entities are stored in the same table","Foreign keys always match primary keys"],
 ans:1,
 exps:["Incorrect. Entity integrity is about primary keys, not foreign keys.","✓ Correct. Entity Integrity rule: the primary key of a relation cannot be NULL (and must be unique). Every row must be uniquely and fully identifiable.","Incorrect. Multiple tables store different entities.","Incorrect. Foreign key matching primary keys is 'Referential Integrity', not entity integrity."]},

{q:"What does 'Referential Integrity' ensure?",trap:false,
 opts:["No two rows have the same primary key","Every foreign key value either matches an existing primary key value in the referenced table or is NULL","All columns have default values","Rows cannot be deleted from the database"],
 ans:1,
 exps:["Incorrect. That is entity integrity (uniqueness + not null of PK).","✓ Correct. Referential integrity ensures consistency between related tables: every non-null FK value must exist as a PK value in the referenced (parent) table. You cannot have an 'orphan' row.","Incorrect. Default values are a column property, not referential integrity.","Incorrect. Referential integrity restricts certain deletions (must handle child rows first) but doesn't prevent all deletions."]},

{q:"What happens if you try to DELETE a parent row that has matching FOREIGN KEY rows in a child table (with default behavior)?",trap:true,
 opts:["The parent row is deleted and child rows are automatically updated to NULL","The deletion fails with a referential integrity violation error","Child rows are automatically deleted too","The operation is silently ignored"],
 ans:1,
 exps:["Incorrect. That would be ON DELETE SET NULL behavior — not the default.","✓ Correct. By default (RESTRICT/NO ACTION), deleting a parent row that still has referencing child rows fails with a foreign key constraint violation. You must first delete/update child rows.","Incorrect. That would be ON DELETE CASCADE behavior — not the default.","Incorrect. DBMS enforces the constraint and throws an error."]},

{q:"A 'schema' in a relational database refers to:",trap:false,
 opts:["The physical storage format of data on disk","The logical blueprint defining the structure of the database — tables, columns, types, and constraints","A backup of all database records","A stored procedure collection"],
 ans:1,
 exps:["Incorrect. Physical storage format is the internal/physical level.","✓ Correct. A schema is the logical structure: what tables exist, what columns they have, what data types, what constraints, what relationships. It's the blueprint without the actual data.","Incorrect. Backups contain data; the schema describes structure.","Incorrect. Stored procedures are executable code objects, not the schema itself (though they're part of the broader DB object model)."]},

{q:"The NOT NULL constraint ensures:",trap:false,
 opts:["Column values must be unique","Column cannot contain a NULL (missing/unknown) value","Column must contain only numbers","Column must have a default value"],
 ans:1,
 exps:["Incorrect. Uniqueness is enforced by UNIQUE or PRIMARY KEY constraints.","✓ Correct. NOT NULL constraint means every inserted/updated row must provide a non-NULL value for that column. NULL represents missing or unknown data.","Incorrect. Data type constraints (INT, NUMERIC) handle numeric restriction.","Incorrect. DEFAULT provides a value if none is given; NOT NULL rejects NULL specifically."]},

{q:"Which of the following is TRUE about NULL values?",trap:true,
 opts:["NULL = 0 for numeric columns","NULL = '' (empty string) for text columns","NULL means unknown or missing — it is not equal to anything, not even another NULL","NULL can only appear in optional foreign key columns"],
 ans:2,
 exps:["Incorrect. NULL ≠ 0. NULL means unknown; 0 is a known numeric value.","Incorrect. NULL ≠ '' (empty string). An empty string is a known (though empty) value; NULL is the absence of any value.","✓ Correct. NULL represents unknown/missing data. NULL = NULL is FALSE in SQL (use IS NULL instead). Any arithmetic with NULL produces NULL. This is a very common trap question.","Incorrect. NULL can appear in any nullable column, including non-FK columns."]},

{q:"What is a 'composite key'?",trap:false,
 opts:["A key made of multiple tables","A primary key made of two or more columns","A key that references foreign keys","A key with duplicate values"],
 ans:1,
 exps:["Incorrect. Keys are within a single table.","✓ Correct. A composite key (composite primary key) uses two or more columns together to uniquely identify a row. No single column alone uniquely identifies rows, but their combination does.","Incorrect. That describes a foreign key.","Incorrect. Any key (primary, unique, candidate) must have unique values."]},

{q:"Domain constraints in a relational database define:",trap:false,
 opts:["The geographic domain where the database is hosted","The set of valid values an attribute can take (data type, range, format)","The number of users who can access the domain","The network domain of the database server"],
 ans:1,
 exps:["Incorrect. Geographic hosting is an infrastructure concern.","✓ Correct. Domain constraints specify the valid values for an attribute: its data type (INT, VARCHAR), allowable range (age > 0), format (valid email), etc. They restrict the 'domain' (pool of possible values) for each attribute.","Incorrect. User access limits are set by authorization, not domain constraints.","Incorrect. Network domain is a networking concept."]},

{q:"In relational databases, what is the difference between a table and a relation?",trap:true,
 opts:["They are exactly the same — completely interchangeable","A relation is a mathematical concept (set of tuples, no duplicates, no ordering); a table is its physical/implementation form (may allow duplicates, has ordering)","A table is the theoretical concept; a relation is the physical implementation","Relations have foreign keys; tables do not"],
 ans:1,
 exps:["Incorrect. While often used interchangeably, they are technically different.","✓ Correct. In set theory, a relation has no duplicate tuples and no ordering of tuples/attributes. SQL tables (physical) can have duplicate rows (without a PK) and have physical ordering of rows and columns — a subtle but important distinction in theory.","Incorrect. This reverses the correct relationship.","Incorrect. Both tables and relations can have foreign keys defined on them."]},

{q:"The VARCHAR(n) data type stores:",trap:false,
 opts:["Exactly n characters, padding with spaces if shorter","Variable-length character strings up to n characters — storing only what's needed","Fixed binary data up to n bytes","Integer values up to n digits"],
 ans:1,
 exps:["Incorrect. CHAR(n) pads with spaces to fixed length n. VARCHAR does NOT pad.","✓ Correct. VARCHAR(n) is variable-length — if you store 'Hi' in VARCHAR(100), it uses only 2 characters of storage (plus some overhead), not 100.","Incorrect. That describes BYTEA or BLOB types.","Incorrect. INT or NUMERIC handles integer values."]},

{q:"Which constraint prevents duplicate values in a column but ALLOWS NULL?",trap:true,
 opts:["PRIMARY KEY","NOT NULL","UNIQUE","FOREIGN KEY"],
 ans:2,
 exps:["Incorrect. PRIMARY KEY = UNIQUE + NOT NULL. It doesn't allow NULLs.","Incorrect. NOT NULL prevents NULL but doesn't enforce uniqueness.","✓ Correct. UNIQUE constraint prevents duplicate non-null values but allows NULL. In most DBMS (PostgreSQL, SQL Server), multiple NULLs are allowed in a UNIQUE column because NULL ≠ NULL.","Incorrect. FOREIGN KEY enforces referential integrity, not uniqueness within the column itself."]},

{q:"What is the purpose of a CHECK constraint?",trap:false,
 opts:["Checks if the database server is running","Enforces a condition that all values in a column must satisfy","Checks for foreign key violations automatically","Verifies user authentication before queries"],
 ans:1,
 exps:["Incorrect. Server health checks are done by monitoring tools, not SQL constraints.","✓ Correct. CHECK constraint defines a condition (Boolean expression) that every row must satisfy. Example: CHECK(age >= 18) ensures no age below 18 is inserted.","Incorrect. Foreign key constraints handle referential integrity automatically.","Incorrect. Authentication is handled by the DBMS security layer, not constraints."]},

{q:"TRAP: A FOREIGN KEY column must have the same name as the PRIMARY KEY column it references.",trap:true,
 opts:["True — names must match for the reference to work","False — the FK column can have a different name; what matters is the data type and referenced column","True — SQL requires identical column names for FK references","False — FK and PK columns must have different names to avoid ambiguity"],
 ans:1,
 exps:["Incorrect. Names don't need to match — only data types and referenced values must match.","✓ Correct. The FK column name can differ from the PK column name. What matters is: (1) the FK references the correct table and column explicitly in the FOREIGN KEY clause, and (2) data types must be compatible.","Incorrect. SQL lets you specify which column to reference regardless of name.","Incorrect. They can have the same or different names — no such rule."]},

{q:"Which of the following is an example of a domain constraint violation?",trap:false,
 opts:["Inserting a duplicate primary key","Inserting 'abc' into an INTEGER column","Inserting a foreign key value that doesn't exist in the parent table","Inserting NULL into a NOT NULL column"],
 ans:1,
 exps:["Incorrect. Duplicate primary key violates entity integrity / PK constraint.","✓ Correct. Inserting a string 'abc' into an INTEGER column violates the domain constraint — the value is outside the valid domain (set of integers) for that attribute.","Incorrect. Missing FK value violates referential integrity.","Incorrect. NULL into NOT NULL violates the NOT NULL constraint."]},

{q:"What is an 'entity' in the context of relational databases?",trap:false,
 opts:["A database server","A real-world object or concept that is distinguishable and about which data is stored","A SQL query","A type of constraint"],
 ans:1,
 exps:["Incorrect. An entity is a conceptual notion, not a server.","✓ Correct. An entity is any real-world thing about which we want to store data: a person, product, order, etc. In a relational DB, entities are represented as tables.","Incorrect. SQL queries retrieve/manipulate data about entities.","Incorrect. Constraints enforce rules on entity data."]},

{q:"The 'relational model' was proposed by:",trap:false,
 opts:["Bill Gates","Edgar F. Codd","Larry Ellison","Charles Babbage"],
 ans:1,
 exps:["Incorrect. Bill Gates co-founded Microsoft, not the relational model.","✓ Correct. Dr. Edgar F. Codd, an IBM researcher, proposed the relational model in his landmark 1970 paper 'A Relational Model of Data for Large Shared Data Banks'.","Incorrect. Larry Ellison co-founded Oracle Corporation — he commercialized relational databases but didn't invent the model.","Incorrect. Charles Babbage invented mechanical computing machines in the 19th century, long before databases."]},

{q:"Which statement about PRIMARY KEY and UNIQUE KEY is TRUE?",trap:true,
 opts:["Both allow NULL values","Both reject NULL values","PRIMARY KEY rejects NULL; UNIQUE KEY allows NULL (typically)","PRIMARY KEY allows NULL; UNIQUE KEY rejects NULL"],
 ans:2,
 exps:["Incorrect. Primary Key never allows NULL.","Incorrect. Unique Key allows NULL in most DBMS.","✓ Correct. PRIMARY KEY = UNIQUE + NOT NULL (no NULLs allowed). UNIQUE KEY allows NULL values (usually multiple NULLs are allowed since NULL ≠ NULL).","Incorrect. This is reversed — Primary Key rejects NULL, Unique allows it."]},

{q:"What is 'referential integrity' violation?",trap:false,
 opts:["Having two rows with the same primary key","Having a foreign key value that does not match any primary key in the referenced table","Having a NULL in a non-nullable column","Storing a string in a numeric column"],
 ans:1,
 exps:["Incorrect. Two rows with same PK violates entity integrity.","✓ Correct. Referential integrity is violated when a FK value in the child table points to a PK that doesn't exist in the parent table — creating an 'orphan' row.","Incorrect. That violates the NOT NULL constraint.","Incorrect. That violates a domain/data type constraint."]},

{q:"An attribute that can take only a single value for each entity instance is called:",trap:false,
 opts:["Multivalued attribute","Composite attribute","Single-valued attribute","Derived attribute"],
 ans:2,
 exps:["Incorrect. Multivalued attribute can have multiple values (e.g., a person's multiple phone numbers).","Incorrect. Composite attribute can be broken into sub-attributes (e.g., full name → first + last).","✓ Correct. A single-valued (or simple atomic) attribute holds exactly one value per entity instance (e.g., date_of_birth — a person has only one).","Incorrect. Derived attribute is computed from other attributes (e.g., age from date_of_birth)."]},

{q:"What does ON DELETE CASCADE mean for a foreign key?",trap:false,
 opts:["When a child row is deleted, the parent row is also deleted","When a parent row is deleted, all matching child rows are automatically deleted","When a row is deleted, it is moved to an archive table","CASCADE deletion is not allowed in relational databases"],
 ans:1,
 exps:["Incorrect. Cascade goes parent → child, not child → parent.","✓ Correct. ON DELETE CASCADE means: if a parent row (in the referenced table) is deleted, all child rows with matching FK values are automatically deleted. Useful for maintaining referential integrity automatically.","Incorrect. Archiving is a separate application-level operation.","Incorrect. ON DELETE CASCADE is a standard SQL feature supported by all major RDBMS."]},

{q:"A relation with only one attribute is called:",trap:true,
 opts:["Unary relation","Binary relation","Nullary relation","Primary relation"],
 ans:0,
 exps:["✓ Correct. A unary relation has one attribute (degree 1). A binary relation has two attributes, ternary has three, etc.","Incorrect. Binary relation has degree 2 (two attributes).","Incorrect. Nullary would imply zero attributes — a degenerate/theoretical concept.","Incorrect. 'Primary relation' is not a standard term for this."]},

{q:"Which of the following data types would you use to store a person's date of birth in PostgreSQL?",trap:false,
 opts:["VARCHAR(10)","INTEGER","DATE","TIMESTAMP"],
 ans:2,
 exps:["Incorrect. VARCHAR stores text strings — storing '1990-05-15' as text loses date-computation capability.","Incorrect. INTEGER stores whole numbers, not calendar dates.","✓ Correct. DATE is the correct type — it stores year, month, day. You can then compute age, compare dates, etc. using date functions.","Incorrect. TIMESTAMP stores both date AND time. For just a birth date, DATE is more appropriate and semantically correct."]},

{q:"The 'schema' of a database is:",trap:false,
 opts:["The actual data stored in the tables","The structural definition (blueprint) of the database — tables, columns, types, relationships","A type of SQL query","A database backup format"],
 ans:1,
 exps:["Incorrect. The actual data is called the 'instance' or 'extension' of the database.","✓ Correct. The schema is the intension — the design/blueprint. It changes rarely (when structure changes). The instance (actual data) changes frequently with insertions/updates/deletions.","Incorrect. Queries retrieve data; they don't define the schema.","Incorrect. Backup formats are storage/operational concerns."]},

{q:"TRAP: Two different tables in the same database cannot have columns with the same name.",trap:true,
 opts:["True — all column names in a database must be unique","False — columns in different tables can have the same name; tables are separate namespaces","True — identical column names cause join errors","False — column names must be unique only within a schema, not across tables"],
 ans:1,
 exps:["Incorrect. Only within a table must column names be unique.","✓ Correct. Column names must be unique within a single table, but different tables can freely share column names (e.g., both Orders and Customers can have an 'id' column). When querying with JOINs, you use table.column or alias.column to disambiguate.","Incorrect. JOINs handle ambiguity via table name prefixes or aliases.","Incorrect. Column uniqueness is per-table, not per-schema."]},
],

// ─────────────────────────────────────────
// TOPIC 2 – SQL Command Categories (35 Qs)
// ─────────────────────────────────────────
[
{q:"DDL stands for:",trap:false,
 opts:["Data Download Language","Data Definition Language","Dynamic Data Language","Database Deployment Layer"],
 ans:1,
 exps:["Incorrect. This is a fabricated expansion.","✓ Correct. DDL = Data Definition Language — SQL commands used to define and modify the structure of database objects (tables, schemas, indexes, views). Examples: CREATE, ALTER, DROP, TRUNCATE.","Incorrect. This is a fabricated expansion.","Incorrect. This is a fabricated expansion."]},

{q:"Which of the following is a DDL command?",trap:false,
 opts:["SELECT","INSERT","CREATE TABLE","COMMIT"],
 ans:2,
 exps:["Incorrect. SELECT is a DQL (Data Query Language) command.","Incorrect. INSERT is a DML (Data Manipulation Language) command.","✓ Correct. CREATE TABLE is a DDL command — it defines the structure of a new table.","Incorrect. COMMIT is a TCL (Transaction Control Language) command."]},

{q:"DML stands for:",trap:false,
 opts:["Data Management Language","Data Manipulation Language","Database Modeling Language","Distributed Memory Language"],
 ans:1,
 exps:["Incorrect. This is a fabricated expansion.","✓ Correct. DML = Data Manipulation Language — commands that work with the data inside tables. Examples: INSERT (add rows), UPDATE (modify rows), DELETE (remove rows).","Incorrect. This is a fabricated expansion.","Incorrect. This is a fabricated expansion."]},

{q:"TRAP: TRUNCATE is a DML command because it removes data.",trap:true,
 opts:["True — TRUNCATE removes rows, so it is DML","False — TRUNCATE is a DDL command; it removes all rows but also resets the table structure metadata and cannot be rolled back in many DBMS","True — TRUNCATE, DELETE, and DROP are all DML","False — TRUNCATE is a DCL command"],
 ans:1,
 exps:["Incorrect. This is the classic trap. TRUNCATE looks like DML but behaves like DDL.","✓ Correct. TRUNCATE is classified as DDL in most contexts. It deallocates the data pages of the table, cannot be easily rolled back (in some DBMS), and resets AUTO_INCREMENT counters. DELETE (DML) can be rolled back, removes row by row, and fires triggers.","Incorrect. DROP is DDL; TRUNCATE is DDL; only DELETE is DML.","Incorrect. DCL commands are GRANT and REVOKE."]},

{q:"What does the ALTER TABLE command do?",trap:false,
 opts:["Deletes a table permanently","Modifies the structure of an existing table (add/drop/modify columns, constraints)","Updates data values in a table","Creates a new table"],
 ans:1,
 exps:["Incorrect. DROP TABLE permanently deletes a table.","✓ Correct. ALTER TABLE modifies the structure: ALTER TABLE t ADD COLUMN col INT, ALTER TABLE t DROP COLUMN col, ALTER TABLE t ALTER COLUMN col TYPE VARCHAR(100), etc.","Incorrect. UPDATE (DML) changes data values.","Incorrect. CREATE TABLE creates a new table."]},

{q:"Which TCL command saves all changes made in the current transaction?",trap:false,
 opts:["ROLLBACK","SAVEPOINT","COMMIT","GRANT"],
 ans:2,
 exps:["Incorrect. ROLLBACK undoes changes made since the last COMMIT or SAVEPOINT.","Incorrect. SAVEPOINT creates a checkpoint within a transaction to enable partial rollback.","✓ Correct. COMMIT permanently saves all changes made during the current transaction to the database, making them visible to other transactions.","Incorrect. GRANT is a DCL command for permissions."]},

{q:"ROLLBACK in TCL:",trap:false,
 opts:["Permanently saves the current transaction","Undoes all changes made in the current transaction since the last COMMIT or SAVEPOINT","Grants rollback permission to users","Creates a new transaction"],
 ans:1,
 exps:["Incorrect. COMMIT permanently saves changes; ROLLBACK reverses them.","✓ Correct. ROLLBACK undoes all changes in the current transaction, restoring the database to its state at the last COMMIT point (or to a named SAVEPOINT).","Incorrect. GRANT is the DCL command for permissions.","Incorrect. Transactions start automatically (or with BEGIN)."]},

{q:"What is a SAVEPOINT used for?",trap:false,
 opts:["Saving the entire database to disk","Creating a checkpoint within a transaction so you can rollback to that specific point without rolling back the entire transaction","Permanently committing partial work","Encrypting transaction data"],
 ans:1,
 exps:["Incorrect. Full database saves are backups, not SAVEPOINTs.","✓ Correct. SAVEPOINT name; creates a rollback point. Later you can ROLLBACK TO SAVEPOINT name; to undo only the changes after the savepoint, while keeping earlier changes in the transaction.","Incorrect. COMMIT permanently saves; SAVEPOINT only marks a point.","Incorrect. Encryption is unrelated to SAVEPOINTs."]},

{q:"DCL commands control:",trap:false,
 opts:["The structure of the database (tables, columns)","Data manipulation (inserting, updating, deleting)","Access control — granting and revoking user permissions","Transaction flow (commit, rollback)"],
 ans:2,
 exps:["Incorrect. DDL controls database structure.","Incorrect. DML controls data manipulation.","✓ Correct. DCL = Data Control Language. Commands: GRANT (give permissions to users) and REVOKE (remove permissions from users). Controls who can do what in the database.","Incorrect. TCL controls transaction flow."]},

{q:"GRANT and REVOKE are examples of:",trap:false,
 opts:["DDL commands","DML commands","DCL commands","TCL commands"],
 ans:2,
 exps:["Incorrect. DDL = CREATE, ALTER, DROP, TRUNCATE.","Incorrect. DML = INSERT, UPDATE, DELETE.","✓ Correct. GRANT and REVOKE are DCL (Data Control Language) commands. GRANT SELECT ON table TO user; gives SELECT permission. REVOKE SELECT ON table FROM user; removes it.","Incorrect. TCL = COMMIT, ROLLBACK, SAVEPOINT."]},

{q:"The DROP TABLE command:",trap:true,
 opts:["Removes all rows but keeps the table structure","Permanently deletes the table and all its data, including structure, constraints, and indexes","Only drops foreign key constraints","Is the same as TRUNCATE"],
 ans:1,
 exps:["Incorrect. That describes TRUNCATE (keeps structure, removes data).","✓ Correct. DROP TABLE completely removes the table — its definition, all data, all constraints on it, and any associated indexes. It's irreversible (without a backup). This is a DDL command.","Incorrect. ALTER TABLE DROP CONSTRAINT handles specific constraints.","Incorrect. TRUNCATE keeps the table structure; DROP removes everything including the structure."]},

{q:"TRAP: DROP TABLE and TRUNCATE TABLE produce the same result.",trap:true,
 opts:["True — both remove all data from the table","False — TRUNCATE keeps the table structure; DROP removes the entire table including its definition","True — both are DDL commands with identical effects","False — TRUNCATE is slower than DROP because it removes row by row"],
 ans:1,
 exps:["Incorrect. DROP also removes the structure; TRUNCATE only removes data.","✓ Correct. TRUNCATE TABLE: removes all rows, resets sequences, keeps the empty table intact — you can still INSERT into it. DROP TABLE: removes everything — you can't use the table at all afterwards.","Incorrect. While both are DDL, their effects are very different.","Incorrect. TRUNCATE is faster than DELETE (not DROP). TRUNCATE deallocates data pages at once; DELETE removes row by row."]},

{q:"Which SQL category does SELECT belong to?",trap:true,
 opts:["DDL","DML","DQL","TCL"],
 ans:2,
 exps:["Incorrect. DDL = CREATE, ALTER, DROP, TRUNCATE.","Incorrect. Some textbooks classify SELECT under DML, but the more precise classification is DQL.","✓ Correct. SELECT belongs to DQL (Data Query Language) — it retrieves data without modifying it. Some older classifications group it under DML, but DQL is the accurate modern term.","Incorrect. TCL = COMMIT, ROLLBACK, SAVEPOINT."]},

{q:"Which command would you use to add a new column to an existing table?",trap:false,
 opts:["CREATE TABLE","INSERT INTO","ALTER TABLE ... ADD COLUMN","UPDATE ... SET"],
 ans:2,
 exps:["Incorrect. CREATE TABLE creates a whole new table, not modifying an existing one.","Incorrect. INSERT INTO adds rows (records), not columns.","✓ Correct. ALTER TABLE employees ADD COLUMN salary NUMERIC(10,2); adds a new column to an existing table without affecting existing data.","Incorrect. UPDATE modifies existing data values in rows."]},

{q:"After executing a ROLLBACK, which of the following is TRUE?",trap:false,
 opts:["All changes in the transaction are permanently saved","All changes in the transaction since the last COMMIT are undone","Only changes after the SAVEPOINT are undone","The table is dropped"],
 ans:1,
 exps:["Incorrect. COMMIT permanently saves; ROLLBACK does the opposite.","✓ Correct. ROLLBACK (without SAVEPOINT) undoes ALL changes made in the current transaction since the last COMMIT, restoring the database to that prior state.","Incorrect. ROLLBACK TO SAVEPOINT name; undoes only to the named point. Plain ROLLBACK goes to the last COMMIT.","Incorrect. ROLLBACK has nothing to do with dropping tables."]},

{q:"What does CREATE INDEX do?",trap:false,
 opts:["Creates a new table","Creates a pointer structure to speed up query retrieval on a column","Creates a new database user","Creates a backup copy of a table"],
 ans:1,
 exps:["Incorrect. CREATE TABLE creates tables.","✓ Correct. An INDEX is a database object that stores a sorted reference structure (like a B-tree) on column values, allowing the DBMS to find rows quickly without scanning the entire table. It speeds up SELECT but slightly slows INSERT/UPDATE/DELETE.","Incorrect. CREATE USER creates database users.","Incorrect. Backups are made with backup utilities, not CREATE INDEX."]},

{q:"Which of the following statements about DDL commands is TRUE?",trap:true,
 opts:["DDL commands can always be rolled back","DDL commands are auto-committed in most DBMS and cannot be rolled back","DDL commands only work on data, not structure","DDL commands require explicit COMMIT to take effect"],
 ans:1,
 exps:["Incorrect. In most DBMS (MySQL, Oracle), DDL is auto-committed.","✓ Correct. In most DBMS, DDL commands (CREATE, DROP, ALTER, TRUNCATE) are implicitly/automatically committed — they cannot be rolled back. PostgreSQL is an exception where DDL can be wrapped in a transaction and rolled back.","Incorrect. DDL works on structure, not data.","Incorrect. DDL is auto-committed — it doesn't wait for an explicit COMMIT."]},

{q:"The INSERT INTO command is used to:",trap:false,
 opts:["Modify existing rows","Add new rows (records) to a table","Delete rows from a table","Create a new table"],
 ans:1,
 exps:["Incorrect. UPDATE modifies existing rows.","✓ Correct. INSERT INTO table (col1, col2) VALUES (val1, val2); adds a new row to the specified table.","Incorrect. DELETE removes rows.","Incorrect. CREATE TABLE creates new tables."]},

{q:"The UPDATE command in DML:",trap:false,
 opts:["Inserts new rows into a table","Modifies existing data values in one or more rows","Drops and recreates the table","Creates indexes on the table"],
 ans:1,
 exps:["Incorrect. INSERT adds new rows.","✓ Correct. UPDATE table SET column = value WHERE condition; modifies existing rows. Without a WHERE clause, ALL rows are updated — a common dangerous mistake.","Incorrect. DROP + CREATE would be DDL operations.","Incorrect. CREATE INDEX creates indexes."]},

{q:"TRAP: DELETE without a WHERE clause deletes only one row.",trap:true,
 opts:["True — DELETE always deletes one row at a time","False — DELETE without WHERE deletes ALL rows in the table","True — you need LIMIT 1 for it to delete all rows","False — DELETE without WHERE raises an error"],
 ans:1,
 exps:["Incorrect. DELETE without WHERE deletes every row.","✓ Correct. DELETE FROM table; with no WHERE clause removes EVERY row from the table. This is a dangerous operation. Unlike TRUNCATE, it can be rolled back (in a transaction), fires triggers, and logs each row deletion.","Incorrect. LIMIT is for SELECT (or DELETE with LIMIT in MySQL). Standard DELETE without WHERE deletes all rows.","Incorrect. It executes successfully — no error — making it extra dangerous."]},

{q:"Which command is used to remove a database entirely?",trap:false,
 opts:["DELETE DATABASE","DROP DATABASE","TRUNCATE DATABASE","REMOVE DATABASE"],
 ans:1,
 exps:["Incorrect. DELETE DATABASE is not valid SQL syntax.","✓ Correct. DROP DATABASE database_name; removes the entire database, including all its tables, data, views, indexes, and stored procedures. Extremely destructive — use with caution.","Incorrect. TRUNCATE works on tables, not databases.","Incorrect. REMOVE is not a SQL command."]},

{q:"What is the purpose of the REVOKE command?",trap:false,
 opts:["Removes all data from a table","Withdraws previously granted privileges from a user or role","Rolls back a transaction","Drops a constraint from a table"],
 ans:1,
 exps:["Incorrect. TRUNCATE or DELETE removes table data.","✓ Correct. REVOKE SELECT, INSERT ON table FROM user; removes the specified permissions that were previously granted. DCL command.","Incorrect. ROLLBACK is the TCL command for undoing transactions.","Incorrect. ALTER TABLE DROP CONSTRAINT removes constraints."]},

{q:"Which of the following SQL commands implicitly ends the current transaction and starts a new one in most DBMS?",trap:true,
 opts:["SELECT","INSERT","CREATE TABLE (DDL commands)","ROLLBACK"],
 ans:2,
 exps:["Incorrect. SELECT is a read-only operation that doesn't affect transaction boundaries in most DBMS.","Incorrect. INSERT is DML and stays within the current transaction.","✓ Correct. In most DBMS (MySQL, Oracle), executing a DDL statement (CREATE, DROP, ALTER) automatically commits any pending transaction and starts a new one — DDL is auto-committed.","Incorrect. ROLLBACK ends the transaction by undoing it — it doesn't start a new implicit commit."]},

{q:"The correct syntax for creating a table with a primary key in SQL is:",trap:false,
 opts:["CREATE TABLE Student { id INT PRIMARY KEY, name VARCHAR(50) }","CREATE TABLE Student (id INT PRIMARY KEY, name VARCHAR(50));","MAKE TABLE Student (id INT PRIMARY KEY, name VARCHAR(50));","BUILD TABLE Student (id INT, name VARCHAR(50)) PRIMARY KEY(id);"],
 ans:1,
 exps:["Incorrect. SQL uses parentheses (), not curly braces {}. Also missing semicolon.","✓ Correct. CREATE TABLE uses parentheses, comma-separated column definitions, and the PRIMARY KEY constraint inline or as a table constraint.","Incorrect. MAKE TABLE is not valid SQL.","Incorrect. While table-level PRIMARY KEY syntax exists, 'BUILD TABLE' is not valid SQL."]},

{q:"What does GRANT SELECT ON employees TO john; do?",trap:false,
 opts:["Allows 'john' to modify data in the employees table","Allows 'john' to read (query) the employees table","Makes 'john' the owner of the employees table","Creates a new user named 'john'"],
 ans:1,
 exps:["Incorrect. SELECT is read-only. GRANT INSERT/UPDATE would allow modifications.","✓ Correct. GRANT SELECT gives the user 'john' permission to run SELECT queries on the employees table — reading data only.","Incorrect. Ownership is set separately; GRANT only gives specific privileges.","Incorrect. User creation uses CREATE USER command."]},

{q:"TRUNCATE vs DELETE — which statement is CORRECT?",trap:true,
 opts:["TRUNCATE can be rolled back; DELETE cannot","DELETE is faster than TRUNCATE for removing all rows","TRUNCATE is faster than DELETE and resets identity counters; DELETE is slower but can be rolled back and fires triggers","They are identical operations with different names"],
 ans:2,
 exps:["Incorrect. This is reversed — in most DBMS, TRUNCATE cannot be rolled back (auto-committed); DELETE CAN be rolled back within a transaction.","Incorrect. TRUNCATE is significantly faster for removing all rows.","✓ Correct. TRUNCATE: faster (deallocates pages), resets AUTO_INCREMENT/sequences, DDL (auto-committed, no triggers). DELETE: slower (row-by-row), can be rolled back, fires row-level triggers, is DML.","Incorrect. They have significant behavioral differences as explained."]},

{q:"Which command would you use to change a column's data type in PostgreSQL?",trap:false,
 opts:["MODIFY TABLE employees CHANGE COLUMN salary TO NUMERIC","ALTER TABLE employees ALTER COLUMN salary TYPE NUMERIC(12,2)","UPDATE TABLE employees SET COLUMN salary = NUMERIC","CHANGE COLUMN salary IN employees TO NUMERIC"],
 ans:1,
 exps:["Incorrect. MODIFY TABLE is not standard SQL (MySQL uses ALTER TABLE ... MODIFY COLUMN).","✓ Correct. PostgreSQL syntax: ALTER TABLE table_name ALTER COLUMN col_name TYPE new_type; This changes the column's data type.","Incorrect. UPDATE modifies data, not schema.","Incorrect. CHANGE COLUMN is not standard SQL syntax."]},

{q:"Creating a view in SQL is done with:",trap:false,
 opts:["MAKE VIEW","CREATE VIEW view_name AS SELECT ...","BUILD VIEW","DEFINE VIEW"],
 ans:1,
 exps:["Incorrect. MAKE VIEW is not valid SQL.","✓ Correct. CREATE VIEW v AS SELECT col1, col2 FROM table WHERE condition; creates a virtual table based on the SELECT query. Views are DDL.","Incorrect. BUILD VIEW is not valid SQL.","Incorrect. DEFINE VIEW is not valid SQL."]},

{q:"Which of the following best describes a transaction?",trap:false,
 opts:["A single SQL query","A logical unit of work consisting of one or more SQL operations that must all succeed or all fail together","A backup of the database","A type of JOIN operation"],
 ans:1,
 exps:["Incorrect. A transaction can contain multiple operations.","✓ Correct. A transaction is an atomic unit of work. For example, a bank transfer: DEBIT account A and CREDIT account B must both succeed. If one fails, both are rolled back. This is managed by TCL (COMMIT/ROLLBACK).","Incorrect. Backups are separate operations.","Incorrect. JOINs are query operations within a transaction."]},

{q:"TRAP: You can ROLLBACK after a COMMIT.",trap:true,
 opts:["True — ROLLBACK always undoes the last operation","False — once COMMITted, changes are permanent and cannot be rolled back","True — use ROLLBACK TO SAVEPOINT after COMMIT","False — ROLLBACK only works before DDL statements"],
 ans:1,
 exps:["Incorrect. ROLLBACK only works on uncommitted transactions.","✓ Correct. Once you COMMIT a transaction, the changes are permanently written to the database. You cannot use ROLLBACK to undo a committed transaction. To undo committed changes, you'd need a backup or another compensating transaction.","Incorrect. SAVEPOINT also only works within the current (uncommitted) transaction.","Incorrect. ROLLBACK's scope is uncommitted DML changes, not DDL-related."]},

{q:"What is the difference between DROP and DELETE?",trap:false,
 opts:["DROP removes rows; DELETE removes the table","DELETE removes specific rows (DML, rollback-able); DROP removes entire database objects (DDL, usually permanent)","They are synonyms","DROP only works on databases; DELETE only works on rows"],
 ans:1,
 exps:["Incorrect. This is reversed.","✓ Correct. DELETE is DML — removes rows matching a WHERE clause, can be rolled back within a transaction. DROP is DDL — removes entire objects (table, database, index), permanently and usually irreversibly.","Incorrect. They are very different commands.","Incorrect. DROP works on tables, views, indexes, databases, etc. DELETE works on rows in tables."]},
],

// ─────────────────────────────────────────
// TOPIC 3 – SQL Retrieving Data (35 Qs)
// ─────────────────────────────────────────
[
{q:"What does SELECT DISTINCT do?",trap:false,
 opts:["Returns only the first row","Returns only unique (non-duplicate) values from the specified column(s)","Selects rows in alphabetical order","Returns rows where values are not NULL"],
 ans:1,
 exps:["Incorrect. LIMIT 1 or FETCH FIRST 1 ROW returns only the first row.","✓ Correct. SELECT DISTINCT col FROM table; eliminates duplicate values from the result set. If multiple columns are specified, the combination of values must be unique.","Incorrect. ORDER BY handles sorting.","Incorrect. IS NOT NULL filters NULLs; DISTINCT removes duplicates."]},

{q:"The WHERE clause is used to:",trap:false,
 opts:["Sort the result set","Filter rows based on a specified condition","Group rows by a column","Select specific columns"],
 ans:1,
 exps:["Incorrect. ORDER BY sorts results.","✓ Correct. WHERE condition; filters rows before they are returned (or grouped/aggregated). Only rows where the condition is TRUE are included.","Incorrect. GROUP BY groups rows.","Incorrect. The SELECT column list specifies which columns to return."]},

{q:"What does the LIKE operator do?",trap:false,
 opts:["Checks if a value is in a list","Performs pattern matching on string values using wildcards","Checks for NULL values","Compares two numeric values"],
 ans:1,
 exps:["Incorrect. IN checks if a value is in a list.","✓ Correct. LIKE 'pattern' performs text pattern matching. Wildcards: % (any sequence of characters), _ (exactly one character). Example: WHERE name LIKE 'A%' finds names starting with 'A'.","Incorrect. IS NULL / IS NOT NULL checks for NULLs.","Incorrect. Comparison operators (=, >, <, >=, <=) compare numeric values."]},

{q:"What does the % wildcard represent in a LIKE pattern?",trap:false,
 opts:["Exactly one character","Zero or more characters (any sequence)","Only numeric characters","Only alphabetic characters"],
 ans:1,
 exps:["Incorrect. The _ (underscore) represents exactly one character.","✓ Correct. % matches any sequence of zero or more characters. 'A%' = starts with A. '%son' = ends with 'son'. '%ar%' = contains 'ar' anywhere.","Incorrect. LIKE doesn't distinguish character types in its wildcards.","Incorrect. % matches any characters including numbers, spaces, etc."]},

{q:"What does the _ (underscore) wildcard in LIKE match?",trap:true,
 opts:["Zero or more characters","Exactly one character (any)","Only digits","Only lowercase letters"],
 ans:1,
 exps:["Incorrect. % matches zero or more characters, not underscore.","✓ Correct. _ matches exactly one character (any character). 'A_C' matches 'ABC', 'AXC', 'A1C', but NOT 'AC' (too short) or 'ABBC' (too long).","Incorrect. _ matches any character, not just digits.","Incorrect. _ is case-insensitive to character type."]},

{q:"The IN operator in SQL is used to:",trap:false,
 opts:["Check if a value exists within a subquery or list of values","Join two tables together","Check if a column value is NULL","Sort results in order"],
 ans:0,
 exps:["✓ Correct. WHERE col IN (val1, val2, val3) is shorthand for WHERE col = val1 OR col = val2 OR col = val3. Can also be used with subqueries: WHERE id IN (SELECT id FROM another_table).","Incorrect. JOIN combines tables; IN filters rows.","Incorrect. IS NULL checks for NULL.","Incorrect. ORDER BY sorts results."]},

{q:"TRAP: WHERE id IN (1, 2, NULL) will match rows where id IS NULL.",trap:true,
 opts:["True — NULL is in the list so it matches NULL values","False — NULL comparisons always return UNKNOWN, so IN with NULL never matches NULL rows","True — IN treats NULL like any other value","False — IN with NULL causes a syntax error"],
 ans:1,
 exps:["Incorrect. NULL is not equal to anything, including itself.","✓ Correct. NULL comparisons return UNKNOWN (not TRUE). WHERE id IN (1, 2, NULL) expands to id=1 OR id=2 OR id=NULL. Since id=NULL is UNKNOWN, NULL rows are NOT returned. Use IS NULL explicitly to match NULLs.","Incorrect. NULL is never 'equal to' NULL in SQL.","Incorrect. NULL in an IN list is syntactically valid — it just doesn't match any rows."]},

{q:"The EXISTS operator in SQL:",trap:false,
 opts:["Checks if a column value exists as a non-NULL","Returns TRUE if a subquery returns at least one row","Checks if a table exists in the database","Counts the number of rows that exist"],
 ans:1,
 exps:["Incorrect. IS NOT NULL checks for non-null values.","✓ Correct. EXISTS (subquery) returns TRUE if the subquery produces at least one row, regardless of the actual data in those rows. Commonly used for correlated subqueries.","Incorrect. Checking if a table exists uses information_schema queries.","Incorrect. COUNT() counts rows."]},

{q:"What is the difference between WHERE and HAVING?",trap:false,
 opts:["WHERE filters after grouping; HAVING filters before grouping","WHERE filters individual rows before grouping; HAVING filters groups after GROUP BY","They are identical — both filter rows","HAVING works without GROUP BY; WHERE requires GROUP BY"],
 ans:1,
 exps:["Incorrect. This is reversed.","✓ Correct. WHERE filters rows before aggregation (GROUP BY). HAVING filters groups after aggregation. You cannot use aggregate functions in WHERE; you CAN in HAVING.","Incorrect. They operate at different stages of query execution.","Incorrect. HAVING is specifically for filtering after GROUP BY (or aggregate results); WHERE doesn't require GROUP BY."]},

{q:"LIMIT 5 OFFSET 10 returns:",trap:true,
 opts:["The first 5 rows","Rows 5 through 10","5 rows starting from row 11 (skipping the first 10)","The last 5 rows"],
 ans:2,
 exps:["Incorrect. LIMIT 5 alone returns the first 5 rows.","Incorrect. That would be rows 5-10, skipping only 4.","✓ Correct. OFFSET 10 skips the first 10 rows; LIMIT 5 returns the next 5 rows — rows 11 through 15. Useful for pagination: page 1 = LIMIT 5 OFFSET 0, page 2 = LIMIT 5 OFFSET 5, page 3 = LIMIT 5 OFFSET 10.","Incorrect. ORDER BY ... DESC LIMIT 5 would get the last 5."]},

{q:"Which SQL query finds all employees whose name starts with 'J'?",trap:false,
 opts:["SELECT * FROM employees WHERE name = 'J%'","SELECT * FROM employees WHERE name LIKE 'J%'","SELECT * FROM employees WHERE name IN ('J%')","SELECT * FROM employees WHERE name STARTS WITH 'J'"],
 ans:1,
 exps:["Incorrect. = performs exact match; 'J%' would literally look for a name equal to the string 'J%'.","✓ Correct. LIKE 'J%' uses the % wildcard to match any name starting with 'J'.","Incorrect. IN performs equality checks; 'J%' in an IN list looks for the literal string 'J%'.","Incorrect. STARTS WITH is not standard SQL (though some DBMS support it)."]},

{q:"TRAP: SELECT * FROM employees WHERE salary = NULL returns employees with no salary.",trap:true,
 opts:["True — = NULL is the correct way to check for NULL values","False — NULL comparisons with = always return UNKNOWN; use IS NULL instead","True — NULL is treated as 0 in comparisons","False — this would throw a syntax error"],
 ans:1,
 exps:["Incorrect. = NULL never returns TRUE — it returns UNKNOWN.","✓ Correct. In SQL, NULL = NULL returns UNKNOWN (not TRUE). To find NULL values, you MUST use: WHERE salary IS NULL. Any comparison with NULL using =, !=, >, < returns UNKNOWN, which is treated as FALSE in WHERE clauses.","Incorrect. NULL is not treated as 0. NULL means unknown/missing.","Incorrect. salary = NULL is syntactically valid but semantically wrong — it returns 0 rows."]},

{q:"The NOT LIKE operator:",trap:false,
 opts:["Is not valid SQL","Returns rows where the value does NOT match the specified pattern","Returns rows where the value DOES match the pattern","Is identical to LIKE"],
 ans:1,
 exps:["Incorrect. NOT LIKE is valid standard SQL.","✓ Correct. NOT LIKE 'pattern' returns rows where the column value does NOT match the given pattern. Example: WHERE name NOT LIKE 'A%' returns all names NOT starting with 'A'.","Incorrect. That describes LIKE without NOT.","Incorrect. NOT LIKE is the logical inverse of LIKE."]},

{q:"What does ILIKE do in PostgreSQL?",trap:false,
 opts:["Case-insensitive pattern matching (like LIKE but ignores case)","Integer LIKE — only matches numeric patterns","Inverse LIKE — same as NOT LIKE","Standard LIKE — identical to LIKE"],
 ans:0,
 exps:["✓ Correct. ILIKE is PostgreSQL-specific. It works like LIKE but is case-insensitive. WHERE name ILIKE 'john%' matches 'John', 'JOHN', 'john', etc. Standard SQL uses LOWER(name) LIKE 'john%' for portability.","Incorrect. There is no 'Integer LIKE'.","Incorrect. NOT LIKE is the inverse; ILIKE is case-insensitive matching.","Incorrect. ILIKE is different from LIKE — it ignores case."]},

{q:"The ORDER BY clause with DESC sorts results in:",trap:false,
 opts:["Ascending order (A to Z, 1 to 9)","Descending order (Z to A, 9 to 1)","Random order","Alphabetical order only"],
 ans:1,
 exps:["Incorrect. ASC (or no keyword) sorts ascending.","✓ Correct. ORDER BY col DESC sorts in descending order — largest to smallest for numbers, Z to A for text.","Incorrect. RANDOM() or RAND() gives random order.","Incorrect. Alphabetical applies to text; DESC works on numbers and dates too."]},

{q:"SELECT * FROM orders WHERE amount BETWEEN 100 AND 500; selects rows where amount:",trap:true,
 opts:["Is strictly greater than 100 and strictly less than 500","Is greater than or equal to 100 AND less than or equal to 500 (inclusive on both ends)","Is between 100 and 500 but excluding both endpoints","Is NOT between 100 and 500"],
 ans:1,
 exps:["Incorrect. BETWEEN is inclusive — it includes the endpoints.","✓ Correct. BETWEEN x AND y is equivalent to >= x AND <= y. Both endpoints (100 and 500) are included. If you want exclusive, write: amount > 100 AND amount < 500.","Incorrect. BETWEEN includes both endpoints.","Incorrect. NOT BETWEEN would exclude the range."]},

{q:"What does SELECT DISTINCT col1, col2 FROM t; return?",trap:true,
 opts:["Rows where col1 is distinct AND rows where col2 is distinct (separately)","Unique combinations of (col1, col2) — the pair must be unique","All rows where col1 is unique","All rows where col2 is unique"],
 ans:1,
 exps:["Incorrect. DISTINCT applies to the entire selected row, not individual columns separately.","✓ Correct. DISTINCT with multiple columns returns rows where the combination of all selected column values is unique. (col1='A', col2='B') and (col1='A', col2='C') are two different rows — both included.","Incorrect. DISTINCT operates on the full combination of listed columns.","Incorrect. Same as above — DISTINCT applies to the whole row, not one column."]},

{q:"Which logical operator has the HIGHEST precedence in SQL WHERE clauses?",trap:true,
 opts:["OR","AND","NOT","They all have equal precedence"],
 ans:2,
 exps:["Incorrect. OR has the lowest precedence of the three.","Incorrect. AND has higher precedence than OR but lower than NOT.","✓ Correct. Precedence order: NOT > AND > OR. So: WHERE a OR b AND NOT c evaluates as: WHERE a OR (b AND (NOT c)). Always use parentheses to make intent explicit.","Incorrect. They have different precedence levels."]},

{q:"TRAP: WHERE name LIKE '%' matches only non-empty strings.",trap:true,
 opts:["True — % requires at least one character","False — % matches zero or more characters, so '%' matches everything including empty strings","True — LIKE '%' returns NULL rows too","False — LIKE '%' matches nothing"],
 ans:1,
 exps:["Incorrect. % means zero OR more characters — it includes zero-length strings.","✓ Correct. LIKE '%' matches any string including empty strings. Since % represents zero or more of any character, every non-NULL string value matches '%'. NULL still doesn't match (NULL comparisons return UNKNOWN).","Incorrect. NULL values don't match any LIKE pattern — LIKE always returns UNKNOWN for NULL inputs.","Incorrect. LIKE '%' matches all non-NULL values."]},

{q:"What does the NOT IN operator do?",trap:false,
 opts:["Checks if value is in the specified list","Returns rows where the value is NOT in the specified list or subquery","Is equivalent to IN","Checks for NULL values"],
 ans:1,
 exps:["Incorrect. That's what IN does.","✓ Correct. NOT IN (val1, val2) returns rows where the column value does not match any value in the list.","Incorrect. NOT IN is the logical negation of IN.","Incorrect. IS NULL / IS NOT NULL checks for NULL."]},

{q:"TRAP: NOT IN with a NULL in the list can return unexpected results.",trap:true,
 opts:["False — NOT IN handles NULL gracefully","True — if the list contains NULL, NOT IN returns no rows at all (empty result)","True — NOT IN with NULL raises an error","False — NULL in a NOT IN list is ignored"],
 ans:1,
 exps:["Incorrect. NOT IN with NULL in the list is a notorious SQL trap.","✓ Correct. WHERE id NOT IN (1, 2, NULL) expands to: id != 1 AND id != 2 AND id != NULL. Since id != NULL is always UNKNOWN, the AND chain becomes UNKNOWN, so NO rows are returned. This is a very common bug! Use NOT EXISTS or filter out NULLs first.","Incorrect. It's syntactically valid — the bug is logical, not a syntax error.","Incorrect. NULL in NOT IN is NOT silently ignored — it poisons the entire comparison."]},

{q:"What is the execution order of SQL clauses?",trap:true,
 opts:["SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY","FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY","WHERE → FROM → SELECT → GROUP BY → HAVING → ORDER BY","SELECT → WHERE → FROM → GROUP BY → ORDER BY → HAVING"],
 ans:1,
 exps:["Incorrect. This is the written order, but not the logical execution order.","✓ Correct. Logical execution order: FROM (get data source) → WHERE (filter rows) → GROUP BY (group) → HAVING (filter groups) → SELECT (compute output columns) → ORDER BY (sort) → LIMIT (truncate). This is why you can't use SELECT aliases in WHERE.","Incorrect. WHERE comes after FROM logically.","Incorrect. This is completely out of order."]},

{q:"SELECT name FROM employees WHERE department = 'IT' OR department = 'HR'; can be rewritten as:",trap:false,
 opts:["SELECT name FROM employees WHERE department = 'IT' AND 'HR'","SELECT name FROM employees WHERE department IN ('IT', 'HR')","SELECT name FROM employees WHERE department LIKE 'IT' OR 'HR'","SELECT name FROM employees WHERE department BETWEEN 'IT' AND 'HR'"],
 ans:1,
 exps:["Incorrect. AND requires both conditions to be true simultaneously — a department can't be both 'IT' AND 'HR'.","✓ Correct. IN ('IT', 'HR') is a cleaner way to write multiple OR conditions for the same column.","Incorrect. LIKE requires a pattern with % or _, and 'OR HR' is invalid syntax.","Incorrect. BETWEEN works on ranges; text comparison between 'IT' and 'HR' is alphabetical and semantically wrong here."]},

{q:"How do you retrieve only the top 10 rows from a query in PostgreSQL?",trap:false,
 opts:["SELECT TOP 10 * FROM table","SELECT * FROM table LIMIT 10","SELECT * FROM table ROWNUM <= 10","SELECT * FROM table FETCH 10"],
 ans:1,
 exps:["Incorrect. TOP is SQL Server/Access syntax, not PostgreSQL.","✓ Correct. LIMIT n is the PostgreSQL/MySQL syntax to restrict the number of rows returned.","Incorrect. ROWNUM is Oracle-specific syntax.","Incorrect. The correct syntax is FETCH FIRST 10 ROWS ONLY (ISO standard) or LIMIT 10 (PostgreSQL)."]},

{q:"What does the AS keyword do in SELECT col AS alias?",trap:false,
 opts:["Creates a new column in the table","Assigns a temporary display name (alias) to the column in the result set","Permanently renames the column","Copies data to another column"],
 ans:1,
 exps:["Incorrect. AS creates an alias in the query result, not a new physical column.","✓ Correct. AS assigns an alias — a display name for the column in the result set. It doesn't change the actual table. Example: SELECT salary * 12 AS annual_salary — the computed column is labeled 'annual_salary'.","Incorrect. ALTER TABLE RENAME COLUMN permanently renames.","Incorrect. AS does not copy data."]},

{q:"TRAP: Can you use a column alias (defined in SELECT) in the WHERE clause?",trap:true,
 opts:["Yes — aliases defined in SELECT are available everywhere in the query","No — aliases defined in SELECT are not available in WHERE because WHERE executes before SELECT","Yes — but only for numeric aliases","No — aliases can only be used in GROUP BY"],
 ans:1,
 exps:["Incorrect. Due to execution order, WHERE doesn't see SELECT aliases.","✓ Correct. Because of execution order (FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY), the WHERE clause is processed before SELECT aliases are defined. Use the original expression in WHERE, or wrap in a subquery/CTE.","Incorrect. No aliases are available in WHERE regardless of type.","Incorrect. Actually, in many DBMS, aliases CAN be used in GROUP BY and ORDER BY (which execute after SELECT)."]},

{q:"What does SELECT * mean?",trap:false,
 opts:["Select only the primary key column","Select all columns from the table(s) in the FROM clause","Select random columns","Select the first column only"],
 ans:1,
 exps:["Incorrect. To select only the PK, you'd name it explicitly.","✓ Correct. * is a wildcard that means 'all columns'. SELECT * FROM employees; retrieves every column for every row. In production code, it's better to name specific columns for clarity and performance.","Incorrect. * always returns all columns, not random ones.","Incorrect. * is all columns, not just the first."]},

{q:"Which of the following correctly uses multiple conditions in WHERE?",trap:false,
 opts:["WHERE salary > 50000 THEN department = 'IT'","WHERE salary > 50000 AND department = 'IT'","WHERE salary > 50000 WITH department = 'IT'","WHERE salary > 50000, department = 'IT'"],
 ans:1,
 exps:["Incorrect. THEN is used in CASE expressions, not WHERE conditions.","✓ Correct. Multiple conditions in WHERE use AND (both must be true), OR (at least one must be true), or NOT (negation).","Incorrect. WITH is used for CTEs (Common Table Expressions), not for WHERE conditions.","Incorrect. Comma-separated conditions are not valid SQL WHERE syntax."]},
],

// ─────────────────────────────────────────
// TOPIC 4 – SQL Functions (40 Qs)
// ─────────────────────────────────────────
[
{q:"What does ROUND(3.567, 2) return?",trap:false,
 opts:["3.5","3.56","3.57","4.00"],
 ans:2,
 exps:["Incorrect. Rounding to 2 decimal places looks at the 3rd decimal (7 >= 5), so it rounds up.","Incorrect. 3.56 would be the result of truncating, not rounding.","✓ Correct. ROUND(3.567, 2) rounds to 2 decimal places. The 3rd decimal is 7 (≥5), so the 2nd decimal rounds up: 3.57.","Incorrect. Rounding to 2 decimal places doesn't round up to 4."]},

{q:"TRUNC(3.9) returns:",trap:true,
 opts:["4","3","3.9","0"],
 ans:1,
 exps:["Incorrect. TRUNC does not round — it truncates (chops off) the decimal part.","✓ Correct. TRUNC(3.9) = 3. It removes the decimal portion WITHOUT rounding. Compare: ROUND(3.9) = 4, TRUNC(3.9) = 3.","Incorrect. TRUNC(3.9) removes the .9 entirely, returning 3, not 3.9.","Incorrect. TRUNC removes the fractional part — the integer part (3) remains."]},

{q:"CEIL(4.1) returns:",trap:false,
 opts:["4","5","4.1","4.0"],
 ans:1,
 exps:["Incorrect. CEIL always rounds UP to the next integer.","✓ Correct. CEIL (ceiling) always rounds up to the smallest integer >= the value. CEIL(4.1) = 5. CEIL(4.0) = 4 (already an integer).","Incorrect. CEIL returns an integer result.","Incorrect. CEIL rounds up and returns an integer."]},

{q:"FLOOR(4.9) returns:",trap:false,
 opts:["5","4","4.9","0"],
 ans:1,
 exps:["Incorrect. FLOOR always rounds DOWN — opposite of CEIL.","✓ Correct. FLOOR always rounds down to the largest integer <= the value. FLOOR(4.9) = 4. FLOOR(-4.1) = -5 (rounds toward negative infinity, not zero).","Incorrect. FLOOR returns an integer.","Incorrect. FLOOR(4.9) is 4, not 0."]},

{q:"TRAP: FLOOR(-2.3) returns:",trap:true,
 opts:["-2","−3","-2.3","2"],
 ans:1,
 exps:["Incorrect. FLOOR rounds toward negative infinity, not toward zero.","✓ Correct. FLOOR(-2.3) = -3. FLOOR always rounds DOWN (toward negative infinity). -3 is the largest integer that is still <= -2.3. Compare: TRUNC(-2.3) = -2 (truncates toward zero), FLOOR(-2.3) = -3.","Incorrect. FLOOR returns an integer.","Incorrect. FLOOR doesn't take absolute value."]},

{q:"ABS(-15) returns:",trap:false,
 opts:["-15","0","15","1"],
 ans:2,
 exps:["Incorrect. ABS returns the absolute (non-negative) value.","Incorrect. ABS of a non-zero number is not 0.","✓ Correct. ABS (absolute value) removes the sign and returns the magnitude. ABS(-15) = 15. ABS(15) = 15. ABS(0) = 0.","Incorrect. ABS(-15) = 15, not 1."]},

{q:"POWER(2, 10) returns:",trap:false,
 opts:["20","210","1024","12"],
 ans:2,
 exps:["Incorrect. POWER(2, 10) is 2^10, not 2*10.","Incorrect. 210 is just the concatenation of the arguments.","✓ Correct. POWER(base, exponent) = base^exponent. POWER(2, 10) = 2^10 = 1024.","Incorrect. 12 would be 2+10."]},

{q:"What does NOW() return in PostgreSQL?",trap:false,
 opts:["The current date only (no time)","The current date and time (timestamp with time zone)","The current time only (no date)","A random timestamp"],
 ans:1,
 exps:["Incorrect. CURRENT_DATE returns just the date.","✓ Correct. NOW() returns the current timestamp with timezone at the start of the current transaction. It includes both date and time components.","Incorrect. CURRENT_TIME returns just the time.","Incorrect. NOW() is deterministic within a transaction."]},

{q:"EXTRACT(YEAR FROM '2024-03-15'::DATE) returns:",trap:false,
 opts:["15","3","2024","2024-03-15"],
 ans:2,
 exps:["Incorrect. 15 is the day, not the year.","Incorrect. 3 is the month.","✓ Correct. EXTRACT(field FROM source) pulls out a specific part. EXTRACT(YEAR FROM date) returns the year as a number. Other fields: MONTH, DAY, HOUR, MINUTE, SECOND, DOW (day of week), etc.","Incorrect. EXTRACT returns a numeric value, not the full date."]},

{q:"What does DATE_TRUNC('month', '2024-03-15'::DATE) return?",trap:true,
 opts:["3 (the month number)","2024-03-01 (truncates to start of the month)","2024-03-15 (no change)","2024-01-01 (truncates to start of year)"],
 ans:1,
 exps:["Incorrect. DATE_TRUNC returns a timestamp/date value, not just the month number.","✓ Correct. DATE_TRUNC('month', date) truncates to the start of the month — sets day to 1 and time to 00:00:00. Useful for grouping by month. DATE_TRUNC('year', ...) gives first day of year, DATE_TRUNC('week', ...) gives Monday of the week.","Incorrect. DATE_TRUNC changes the date to the start of the specified period.","Incorrect. That would be DATE_TRUNC('year', ...)."]},

{q:"UPPER('hello world') returns:",trap:false,
 opts:["Hello World","HELLO WORLD","hello world","Hello world"],
 ans:1,
 exps:["Incorrect. Title Case is done with INITCAP() in PostgreSQL.","✓ Correct. UPPER(string) converts all characters to uppercase. UPPER('hello world') = 'HELLO WORLD'.","Incorrect. LOWER() keeps or converts to lowercase.","Incorrect. That would be INITCAP()."]},

{q:"LENGTH('database') returns:",trap:false,
 opts:["7","8","9","6"],
 ans:1,
 exps:["Incorrect. Count: d-a-t-a-b-a-s-e = 8 characters.","✓ Correct. LENGTH(string) returns the number of characters. 'database' has 8 characters: d(1)a(2)t(3)a(4)b(5)a(6)s(7)e(8) = 8.","Incorrect. 'database' has 8 characters.","Incorrect. 'database' has 8 characters."]},

{q:"What does CONCAT('Hello', ' ', 'World') return?",trap:false,
 opts:["HelloWorld","'Hello' ' ' 'World'","Hello World","Hello, World"],
 ans:2,
 exps:["Incorrect. The space character ' ' is included in the CONCAT, so there is a space.","Incorrect. CONCAT joins the strings as values, not as quoted literals.","✓ Correct. CONCAT joins all arguments into one string. CONCAT('Hello', ' ', 'World') = 'Hello World'. The || operator in PostgreSQL also concatenates: 'Hello' || ' ' || 'World' = 'Hello World'.","Incorrect. No comma is added — CONCAT only joins the exact provided strings."]},

{q:"SUBSTRING('PostgreSQL', 1, 4) in PostgreSQL returns:",trap:true,
 opts:["ostg","Post","oSQL","Pos"],
 ans:1,
 exps:["Incorrect. PostgreSQL uses 1-based indexing, so position 1 is 'P', not 'o'.","✓ Correct. SUBSTRING(str, start, length) — in PostgreSQL, string positions are 1-based. Position 1 = 'P', length 4 = 'Post'. Note: some languages use 0-based indexing, but SQL is 1-based.","Incorrect. This doesn't align with a 1-based 4-character extraction from position 1.","Incorrect. Length 4 from position 1 gives 4 characters: P-o-s-t."]},

{q:"TRIM('  hello  ') returns:",trap:false,
 opts:["'  hello  ' (no change)","'hello' (removes leading and trailing spaces)","'hello  ' (removes only leading spaces)","'  hello' (removes only trailing spaces)"],
 ans:1,
 exps:["Incorrect. TRIM does remove whitespace.","✓ Correct. TRIM() by default removes leading AND trailing whitespace. LTRIM removes only leading; RTRIM removes only trailing.","Incorrect. That's LTRIM (left trim).","Incorrect. That's RTRIM (right trim)."]},

{q:"REPLACE('Hello World', 'World', 'SQL') returns:",trap:false,
 opts:["Hello World","Hello SQL","SQL Hello","HelloSQL"],
 ans:1,
 exps:["Incorrect. REPLACE does replace the specified substring.","✓ Correct. REPLACE(string, from_substring, to_substring) replaces all occurrences of 'from_substring' with 'to_substring'. REPLACE('Hello World', 'World', 'SQL') = 'Hello SQL'.","Incorrect. The replacement keeps the original string structure.","Incorrect. The space between Hello and SQL is preserved from the original."]},

{q:"What does COALESCE(NULL, NULL, 5, 10) return?",trap:true,
 opts:["NULL","0","5","10"],
 ans:2,
 exps:["Incorrect. COALESCE returns the first non-NULL value.","Incorrect. COALESCE doesn't return 0 unless 0 is the first non-NULL argument.","✓ Correct. COALESCE(val1, val2, ...) returns the first non-NULL value in the list. The first two are NULL, so it skips them and returns 5 (the third argument).","Incorrect. 10 would only be returned if 5 were also NULL."]},

{q:"NULLIF(5, 5) returns:",trap:true,
 opts:["5","0","NULL","1"],
 ans:2,
 exps:["Incorrect. When both arguments are equal, NULLIF returns NULL.","Incorrect. NULLIF returns NULL or the first argument, never 0 based on this function's logic.","✓ Correct. NULLIF(expr1, expr2) returns NULL if expr1 = expr2, otherwise returns expr1. NULLIF(5, 5): 5 = 5 is TRUE, so it returns NULL. Useful to avoid division by zero: value / NULLIF(denominator, 0).","Incorrect. NULLIF returns NULL or the first value, not 1."]},

{q:"NULLIF(10, 5) returns:",trap:false,
 opts:["NULL","5","2","10"],
 ans:3,
 exps:["Incorrect. NULLIF returns NULL only when both arguments are equal. 10 ≠ 5.","Incorrect. NULLIF returns the first argument when they're not equal.","Incorrect. NULLIF doesn't divide.","✓ Correct. NULLIF(10, 5): since 10 ≠ 5, it returns the first argument: 10."]},

{q:"COUNT(*) vs COUNT(column_name) — what is the difference?",trap:true,
 opts:["They always return the same result","COUNT(*) counts all rows including NULLs; COUNT(col) counts only non-NULL values in that column","COUNT(*) is faster but ignores NULLs","COUNT(col) counts all rows; COUNT(*) counts only non-NULL rows"],
 ans:1,
 exps:["Incorrect. They differ when the column has NULL values.","✓ Correct. COUNT(*) counts every row (including those with NULLs in any column). COUNT(col_name) counts only rows where col_name is NOT NULL. This is a very common exam and interview question.","Incorrect. COUNT(*) includes rows with NULLs (it counts the row, not the values).","Incorrect. This is reversed."]},

{q:"SUM(column) with all NULL values returns:",trap:true,
 opts:["0","NULL","An error","The number of NULL rows"],
 ans:1,
 exps:["Incorrect. SUM of NULLs returns NULL, not 0. Use COALESCE(SUM(col), 0) to get 0 instead.","✓ Correct. Aggregate functions (SUM, AVG, MIN, MAX) ignore NULLs. If ALL values are NULL, the aggregate returns NULL (not 0). COUNT(*) is the exception — it counts all rows.","Incorrect. NULL input to SUM doesn't cause an error.","Incorrect. COUNT(*) counts rows; SUM returns NULL for all-NULL columns."]},

{q:"AVG(col) calculates:",trap:true,
 opts:["SUM(col) / COUNT(*) — total sum divided by total row count","SUM(col) / COUNT(col) — sum of non-NULL values divided by count of non-NULL values","Median of the column","Sum of all values"],
 ans:1,
 exps:["Incorrect. AVG does NOT divide by COUNT(*). This is the trap! NULLs are excluded from both numerator and denominator.","✓ Correct. AVG(col) = SUM(col) / COUNT(col). It ignores NULL values in both the sum and the count. Example: AVG of (10, 20, NULL) = (10+20) / 2 = 15, not (10+20+0)/3 = 10.","Incorrect. PERCENTILE_CONT(0.5) calculates median in PostgreSQL.","Incorrect. SUM calculates the sum."]},

{q:"TO_CHAR(NOW(), 'YYYY-MM-DD') in PostgreSQL:",trap:false,
 opts:["Returns an error — TO_CHAR only works with numbers","Converts the current timestamp to a text string in 'YYYY-MM-DD' format","Returns the current date as a DATE type","Sets the date format for the entire session"],
 ans:1,
 exps:["Incorrect. TO_CHAR works with both numbers AND dates/timestamps.","✓ Correct. TO_CHAR(value, format) converts a number or date/timestamp to a formatted string. TO_CHAR(NOW(), 'YYYY-MM-DD') returns something like '2024-03-15' as text.","Incorrect. The return type is TEXT (VARCHAR), not DATE.","Incorrect. TO_CHAR doesn't change session settings; it formats a single value."]},

{q:"What is the purpose of INTERVAL in SQL?",trap:false,
 opts:["To check if a value is within a range","To represent a duration of time that can be added/subtracted from dates","To create intervals between rows in a result set","To limit the number of rows returned"],
 ans:1,
 exps:["Incorrect. BETWEEN is used for range checks.","✓ Correct. INTERVAL is a data type and literal representing a time duration. Example: NOW() + INTERVAL '7 days' adds 7 days. NOW() - INTERVAL '1 month' subtracts 1 month. Useful for date arithmetic.","Incorrect. Row spacing is handled by window functions like LAG/LEAD.","Incorrect. LIMIT restricts row count."]},

{q:"SPLIT_PART('2024-03-15', '-', 2) returns:",trap:false,
 opts:["2024","15","03","2024-03"],
 ans:2,
 exps:["Incorrect. '2024' is part 1 (first segment before the first '-').","Incorrect. '15' is part 3 (after the second '-').","✓ Correct. SPLIT_PART(string, delimiter, part_number) splits by delimiter and returns the nth part. '2024-03-15' split by '-' gives: part 1='2024', part 2='03', part 3='15'. Part 2 = '03'.","Incorrect. That would be the result if you took part 1 and 2 together, which SPLIT_PART doesn't do."]},

{q:"MAX() and MIN() aggregate functions:",trap:false,
 opts:["Only work on numeric columns","Work on numeric, date, and text columns — return the maximum/minimum value","Ignore duplicate values","Cannot be used with GROUP BY"],
 ans:1,
 exps:["Incorrect. MAX/MIN work on any orderable data type.","✓ Correct. MAX and MIN work on numbers (largest/smallest), dates (latest/earliest), and text (alphabetically last/first). Both ignore NULL values.","Incorrect. MAX/MIN consider all non-NULL values including duplicates.","Incorrect. MAX/MIN are commonly used WITH GROUP BY."]},

{q:"TRAP: ROUND(2.5, 0) in PostgreSQL returns:",trap:true,
 opts:["2 (rounds to even — banker's rounding)","3 (rounds half up)","2.5 (no rounding)","An error"],
 ans:0,
 exps:["✓ Correct. PostgreSQL uses 'round half to even' (banker's rounding) for the ROUND() function. ROUND(2.5, 0) = 2 (rounds to the nearest even number). ROUND(3.5, 0) = 4. This is different from many programming languages that always round 0.5 up.","Incorrect. 'Round half up' is the common expectation but PostgreSQL uses banker's rounding.","Incorrect. ROUND with 0 decimal places does round.","Incorrect. ROUND(2.5, 0) is valid syntax."]},

{q:"What does IS DISTINCT FROM do differently from <>  (not equal)?",trap:true,
 opts:["They are identical operators","IS DISTINCT FROM treats NULL as a comparable value — NULL IS DISTINCT FROM NULL is FALSE, and NULL IS DISTINCT FROM 5 is TRUE","IS DISTINCT FROM is only for text comparisons","<> treats NULL as equal; IS DISTINCT FROM treats it as not equal"],
 ans:1,
 exps:["Incorrect. They differ significantly in how they handle NULL.","✓ Correct. With <>, any comparison involving NULL returns UNKNOWN. IS DISTINCT FROM treats NULL as a known value: NULL IS DISTINCT FROM NULL = FALSE (they're the same 'known' value). NULL IS DISTINCT FROM 5 = TRUE. Useful when you want NULL-safe comparisons.","Incorrect. IS DISTINCT FROM works on all data types.","Incorrect. <> with NULL returns UNKNOWN, not equality."]},

{q:"The function LOWER('SQL IS FUN') returns:",trap:false,
 opts:["Sql Is Fun","SQL IS FUN","sql is fun","Sql is fun"],
 ans:2,
 exps:["Incorrect. LOWER converts ALL characters to lowercase.","Incorrect. That's the original string — LOWER would change it.","✓ Correct. LOWER() converts every character to lowercase. LOWER('SQL IS FUN') = 'sql is fun'.","Incorrect. LOWER converts all characters, not just the first of each word."]},

{q:"EXTRACT(DOW FROM '2024-03-15') returns a number where 0 = Sunday. What does DOW stand for?",trap:false,
 opts:["Day of Work","Day of Week","Date of Week","Day over Week"],
 ans:1,
 exps:["Incorrect. DOW is a specific PostgreSQL EXTRACT field.","✓ Correct. DOW = Day of Week. Returns 0 for Sunday through 6 for Saturday. EXTRACT(DOW FROM date). Also available: ISODOW (1=Monday through 7=Sunday per ISO 8601).","Incorrect. There is no 'Date of Week'.","Incorrect. There is no 'Day over Week'."]},

{q:"Which function would you use to replace NULL with a default value in a query result?",trap:false,
 opts:["NULLIF()","IS NULL","COALESCE()","REPLACE()"],
 ans:2,
 exps:["Incorrect. NULLIF(a, b) returns NULL if a=b. It creates nulls, doesn't replace them.","Incorrect. IS NULL is a predicate (condition), not a function that returns a value.","✓ Correct. COALESCE(col, 'default') returns the first non-NULL value. If col is NULL, it returns 'default'. This is the standard way to substitute NULL with a fallback value.","Incorrect. REPLACE(string, from, to) replaces text substrings, not NULLs."]},
],

// ─────────────────────────────────────────
// TOPIC 5 – GROUP BY and CASE (35 Qs)
// ─────────────────────────────────────────
[
{q:"What does GROUP BY do in SQL?",trap:false,
 opts:["Sorts rows in ascending order","Groups rows with the same values in specified columns so aggregate functions can be applied per group","Filters rows that don't match a condition","Joins multiple tables together"],
 ans:1,
 exps:["Incorrect. ORDER BY sorts results.","✓ Correct. GROUP BY col groups all rows that have the same value in col into a single summary row. Then aggregate functions (COUNT, SUM, AVG, etc.) compute one value per group.","Incorrect. WHERE filters individual rows.","Incorrect. JOIN combines multiple tables."]},

{q:"TRAP: Can you use a non-aggregated, non-grouped column in SELECT with GROUP BY?",trap:true,
 opts:["Yes — all columns are always available in SELECT","No — every column in SELECT must either be in GROUP BY or be wrapped in an aggregate function","Yes — only if the column is a primary key","No — you must use * with GROUP BY"],
 ans:1,
 exps:["Incorrect. Using non-grouped, non-aggregated columns in SELECT is a GROUP BY violation.","✓ Correct. In standard SQL and PostgreSQL, columns in SELECT must be: (1) in the GROUP BY clause, OR (2) inside an aggregate function (COUNT, SUM, AVG, etc.). Using a bare column that's neither causes an error.","Incorrect. Primary key status doesn't exempt a column from this rule in standard SQL.","Incorrect. * is generally avoided with GROUP BY."]},

{q:"SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000; — what does HAVING do here?",trap:false,
 opts:["Filters individual rows before grouping","Filters department groups where the average salary is greater than 50000, after grouping","Creates a new column called HAVING","Sorts the groups by average salary"],
 ans:1,
 exps:["Incorrect. WHERE filters rows before grouping; HAVING filters groups after.","✓ Correct. HAVING filters aggregated groups. After GROUP BY computes one row per department, HAVING AVG(salary) > 50000 keeps only departments whose computed average salary exceeds 50000.","Incorrect. HAVING is a filtering clause, not a column definition.","Incorrect. ORDER BY AVG(salary) would sort groups."]},

{q:"Which of the following is a CORRECT use of CASE in SQL?",trap:false,
 opts:["CASE salary WHEN > 50000 THEN 'High'","CASE WHEN salary > 50000 THEN 'High' WHEN salary > 30000 THEN 'Mid' ELSE 'Low' END","CASE (salary > 50000) = 'High'","IF salary > 50000 THEN 'High' ELSE 'Low' END"],
 ans:1,
 exps:["Incorrect. 'CASE col WHEN value' form requires equality (exact value), not operators like >. Use the searched CASE for conditions.","✓ Correct. The searched CASE form: CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE default END. Conditions are evaluated in order; first TRUE wins.","Incorrect. This is not valid SQL syntax.","Incorrect. SQL uses CASE...END, not IF...END (IF is in procedural SQL like PL/pgSQL)."]},

{q:"WHERE vs HAVING — which can use aggregate functions?",trap:true,
 opts:["WHERE can use aggregates; HAVING cannot","Both WHERE and HAVING can use aggregate functions","Only HAVING can use aggregate functions in its condition","Neither can use aggregate functions"],
 ans:2,
 exps:["Incorrect. WHERE cannot use aggregate functions.","Incorrect. WHERE cannot use aggregate functions.","✓ Correct. Because WHERE is evaluated before GROUP BY (and thus before aggregates are computed), you cannot use aggregate functions in WHERE. HAVING is evaluated after GROUP BY, so aggregate functions are available there.","Incorrect. HAVING can use aggregates; WHERE cannot."]},

{q:"SELECT department, COUNT(*) FROM employees GROUP BY department; — what does this return?",trap:false,
 opts:["Total count of all employees","The department and number of employees in each department (one row per department)","First employee in each department","All employees sorted by department"],
 ans:1,
 exps:["Incorrect. COUNT(*) here is per group (per department), not a single total.","✓ Correct. GROUP BY department creates one row per unique department. COUNT(*) counts how many rows (employees) belong to each group (department). Result: one row per department with its employee count.","Incorrect. GROUP BY doesn't select specific rows; it aggregates.","Incorrect. ORDER BY sorts; GROUP BY groups."]},

{q:"TRAP: GROUP BY automatically sorts the results.",trap:true,
 opts:["True — GROUP BY implicitly sorts by the grouped column","False — GROUP BY does not guarantee any particular order; use ORDER BY for sorting","True — GROUP BY sorts in descending order","False — GROUP BY prevents ordering"],
 ans:1,
 exps:["Incorrect. Some DBMS implementations happen to sort, but it's not guaranteed by the SQL standard.","✓ Correct. The SQL standard makes NO guarantee about ordering of GROUP BY results. Results may appear sorted in some implementations, but for guaranteed ordering you must use ORDER BY explicitly.","Incorrect. No implicit sorting order is guaranteed.","Incorrect. You can use ORDER BY together with GROUP BY."]},

{q:"What does GROUP BY with multiple columns do? (e.g., GROUP BY dept, year)",trap:false,
 opts:["Groups by dept only and ignores year","Creates a group for each unique combination of dept AND year values","Groups by year first, then dept","Returns an error — GROUP BY can only have one column"],
 ans:1,
 exps:["Incorrect. All specified columns participate in forming groups.","✓ Correct. GROUP BY dept, year creates a unique group for every distinct (dept, year) pair. If a dept spans 3 years, there are 3 groups for that dept.","Incorrect. The order in GROUP BY can affect the combination of groups but doesn't mean it ignores the first column.","Incorrect. GROUP BY can accept multiple columns."]},

{q:"SELECT salary, COUNT(*) FROM employees GROUP BY salary HAVING COUNT(*) > 1; — what does this find?",trap:false,
 opts:["Employees who earn more than 1 dollar","Salary values that appear more than once (duplicate salaries) and their frequency","The total count of all employees","Salaries greater than COUNT(*)"],
 ans:1,
 exps:["Incorrect. HAVING COUNT(*) > 1 filters groups (salary values) that have more than one employee.","✓ Correct. This query groups by salary value, counts how many employees have each salary, then HAVING COUNT(*) > 1 keeps only those salary values shared by more than one employee — effectively finding duplicate salaries.","Incorrect. COUNT(*) here is per salary group, not total.","Incorrect. HAVING COUNT(*) > 1 compares the count of rows in each group to 1."]},

{q:"Which of the following causes a common GROUP BY error?",trap:false,
 opts:["Using COUNT(*) in SELECT with GROUP BY","Having a column in SELECT that is not in GROUP BY and not in an aggregate function","Using ORDER BY after GROUP BY","Using HAVING to filter groups"],
 ans:1,
 exps:["Incorrect. COUNT(*) is an aggregate function — perfectly valid in SELECT with GROUP BY.","✓ Correct. In standard SQL (and PostgreSQL), every column in SELECT must either appear in GROUP BY or be inside an aggregate function. A 'bare' column not in GROUP BY is an error in strict mode.","Incorrect. ORDER BY after GROUP BY is valid and common.","Incorrect. HAVING after GROUP BY is the intended use."]},

{q:"CASE WHEN score >= 90 THEN 'A' WHEN score >= 80 THEN 'B' ELSE 'C' END — if score = 85, what is returned?",trap:false,
 opts:["A","B","C","NULL"],
 ans:1,
 exps:["Incorrect. 85 < 90, so the first WHEN fails.","✓ Correct. CASE evaluates conditions in order. score >= 90? No (85 < 90). score >= 80? Yes (85 >= 80). Returns 'B'. The ELSE 'C' is never reached because 'B' matched first.","Incorrect. 'C' is only returned when no WHEN matches (score < 80).","Incorrect. ELSE 'C' handles the no-match case; NULL is only returned if there's no ELSE and no match."]},

{q:"What happens if no WHEN condition in a CASE expression matches and there is no ELSE clause?",trap:true,
 opts:["An error is thrown","NULL is returned","The last WHEN value is returned","The first WHEN value is returned"],
 ans:1,
 exps:["Incorrect. A CASE with no matching WHEN and no ELSE doesn't error.","✓ Correct. If no WHEN condition is TRUE and there is no ELSE, the CASE expression returns NULL. This is a silent failure — no error. Best practice: always include an ELSE clause.","Incorrect. No default fallback to the last value.","Incorrect. No fallback to the first value."]},

{q:"Can you use CASE inside an aggregate function like SUM()?",trap:false,
 opts:["No — CASE cannot be used inside aggregate functions","Yes — e.g., SUM(CASE WHEN dept='IT' THEN salary ELSE 0 END) counts/sums conditionally","Yes — but only with COUNT(), not SUM()","No — use HAVING instead of CASE inside aggregates"],
 ans:1,
 exps:["Incorrect. CASE inside aggregates is a very powerful and common SQL pattern.","✓ Correct. SUM(CASE WHEN condition THEN value ELSE 0 END) is a classic pivot technique. It sums only the values where the condition is TRUE. Works with COUNT, SUM, AVG, etc.","Incorrect. CASE works inside any aggregate function.","Incorrect. HAVING filters; CASE inside aggregates computes conditional values."]},

{q:"SELECT department, CASE WHEN AVG(salary) > 60000 THEN 'High Pay' ELSE 'Low Pay' END FROM employees GROUP BY department; — is this valid SQL?",trap:false,
 opts:["No — CASE cannot reference aggregate functions","Yes — CASE evaluates after GROUP BY aggregation, so AVG(salary) is valid","No — CASE must be in WHERE, not SELECT","Yes — but CASE here is in the wrong position"],
 ans:1,
 exps:["Incorrect. CASE in the SELECT clause evaluates after GROUP BY, so aggregate functions are available.","✓ Correct. Since GROUP BY is computed before SELECT output, the CASE expression has access to the computed AVG(salary) per group. This is a common pattern for categorizing groups.","Incorrect. CASE can be in SELECT, WHERE, HAVING, and ORDER BY.","Incorrect. CASE in SELECT with GROUP BY results is correct."]},

{q:"TRAP: SELECT dept, name, COUNT(*) FROM employees GROUP BY dept; is valid.",trap:true,
 opts:["True — SQL automatically handles the name column","False — 'name' is not in GROUP BY and not in an aggregate function, causing an error","True — GROUP BY dept applies to both dept and name","False — COUNT(*) cannot be used with non-numeric columns"],
 ans:1,
 exps:["Incorrect. This is the classic GROUP BY error — bare columns not in GROUP BY.","✓ Correct. 'name' is not in GROUP BY (dept) and not inside an aggregate. In strict SQL (PostgreSQL), this causes an ERROR: column 'name' must appear in GROUP BY clause or be used in an aggregate function.","Incorrect. GROUP BY dept only groups by dept, not name.","Incorrect. COUNT(*) counts rows regardless of data type."]},

{q:"What is a 'simple' CASE expression vs 'searched' CASE?",trap:false,
 opts:["They are identical — just different names","Simple CASE: CASE col WHEN value THEN result (equality check only). Searched CASE: CASE WHEN condition THEN result (any Boolean condition)","Simple CASE allows range comparisons; searched CASE only allows equality","Simple CASE is faster; searched CASE is for complex queries only"],
 ans:1,
 exps:["Incorrect. They have different syntax and capabilities.","✓ Correct. Simple: CASE col WHEN 1 THEN 'one' WHEN 2 THEN 'two' END — tests equality only. Searched: CASE WHEN col > 0 THEN 'positive' WHEN col < 0 THEN 'negative' END — allows any Boolean condition. Searched CASE is more flexible.","Incorrect. It's the opposite — simple CASE only does equality; searched CASE allows ranges.","Incorrect. Performance difference is negligible; the difference is capability."]},

{q:"SELECT dept, SUM(salary) FROM employees GROUP BY dept ORDER BY SUM(salary) DESC; — is ORDER BY valid here?",trap:false,
 opts:["No — ORDER BY cannot follow GROUP BY","Yes — ORDER BY can sort by the aggregated values after GROUP BY","Yes — but you must use ORDER BY 2 (column position) not SUM(salary)","No — HAVING must come after GROUP BY, not ORDER BY"],
 ans:1,
 exps:["Incorrect. ORDER BY can follow GROUP BY in SQL.","✓ Correct. ORDER BY applies after all grouping and aggregation, so you can sort by aggregate values like SUM(salary). You can also use ORDER BY 2 (positional) or the alias name.","Incorrect. You can use either the expression SUM(salary), a positional number, or an alias.","Incorrect. HAVING filters groups (optional); ORDER BY sorts the final result (also optional). Both can follow GROUP BY."]},

{q:"What does HAVING COUNT(*) = 1 find when used with GROUP BY?",trap:false,
 opts:["Groups with exactly zero records","Groups with exactly one record (unique/singleton groups)","Groups where COUNT is NULL","Groups with at least one record"],
 ans:1,
 exps:["Incorrect. HAVING COUNT(*) = 0 would find empty groups (rarely returned since GROUP BY only creates groups from existing data).","✓ Correct. HAVING COUNT(*) = 1 filters for groups that contain exactly one row — useful for finding unique values or non-duplicated records.","Incorrect. COUNT(*) is never NULL — it's always >= 0 (or >= 1 for groups).","Incorrect. HAVING COUNT(*) >= 1 would find groups with at least one record."]},

{q:"In a CASE expression, if multiple WHEN conditions are TRUE, which result is returned?",trap:true,
 opts:["The last matching WHEN result","All matching results are concatenated","The first matching WHEN result","An error — multiple matches are not allowed"],
 ans:2,
 exps:["Incorrect. CASE returns the FIRST match, not the last.","Incorrect. CASE returns exactly one value.","✓ Correct. CASE evaluates WHEN conditions top-to-bottom and returns the result of the FIRST WHEN condition that is TRUE. Subsequent conditions are not evaluated once a match is found (short-circuit evaluation).","Incorrect. Multiple matches are handled by returning the first one."]},
],

// ─────────────────────────────────────────
// TOPIC 6 – Window Functions (35 Qs)
// ─────────────────────────────────────────
[
{q:"What is the key difference between window functions and GROUP BY?",trap:true,
 opts:["Window functions reduce the number of rows; GROUP BY preserves all rows","GROUP BY reduces rows to one per group; window functions compute values over a window WITHOUT reducing the number of rows","They produce identical results","Window functions can only be used with PARTITION BY"],
 ans:1,
 exps:["Incorrect. This is the opposite of the truth.","✓ Correct. GROUP BY collapses multiple rows into one summary row per group. Window functions compute a value (like a running total or rank) for EACH row over a defined window of rows, without collapsing rows. All original rows are preserved in the output.","Incorrect. GROUP BY collapses rows; window functions do not.","Incorrect. Window functions can be used without PARTITION BY (using the entire result set as the window)."]},

{q:"ROW_NUMBER() assigns:",trap:false,
 opts:["The same number to rows with tied (equal) values","A unique sequential integer to each row within a partition, with no gaps","The rank of each row, with gaps for ties","A random number to each row"],
 ans:1,
 exps:["Incorrect. ROW_NUMBER() always assigns unique numbers — even ties get different numbers.","✓ Correct. ROW_NUMBER() assigns 1, 2, 3, ... to rows within a partition based on ORDER BY. Tied rows get different (arbitrary) sequential numbers. Unlike RANK, there are no gaps or ties.","Incorrect. That describes RANK() or DENSE_RANK().","Incorrect. ROW_NUMBER() is deterministic (given an ORDER BY) — not random."]},

{q:"RANK() vs DENSE_RANK() — what is the difference?",trap:true,
 opts:["They are identical","RANK() has gaps after ties; DENSE_RANK() has no gaps","DENSE_RANK() has gaps; RANK() has no gaps","RANK() only works with numeric data; DENSE_RANK() works with all types"],
 ans:1,
 exps:["Incorrect. They differ in handling tied values.","✓ Correct. Example with scores 100, 100, 90: RANK(): 1, 1, 3 (skips rank 2 — gap). DENSE_RANK(): 1, 1, 2 (no gaps). RANK skips ranks after a tie; DENSE_RANK increments by 1 for each new distinct value.","Incorrect. This is reversed.","Incorrect. Both work with any orderable data type."]},

{q:"LAG(salary, 1) OVER (ORDER BY hire_date) gives:",trap:false,
 opts:["The next row's salary","The previous row's salary (1 row behind in the ordered set)","The salary 1 year ago","The difference between consecutive salaries"],
 ans:1,
 exps:["Incorrect. LEAD() accesses the next row; LAG() accesses the previous row.","✓ Correct. LAG(col, n) looks n rows BACK (behind the current row) in the ordered window. LAG(salary, 1) gives the salary of the row immediately preceding the current row in the ORDER BY sequence.","Incorrect. LAG is row-positional, not date-based.","Incorrect. LAG returns the value, not the difference. You'd compute the difference separately: salary - LAG(salary, 1) OVER (...)."]},

{q:"LEAD(salary, 1) OVER (ORDER BY hire_date) gives:",trap:false,
 opts:["The previous row's salary","The next row's salary (1 row ahead in the ordered set)","The first row's salary","The current row's salary"],
 ans:1,
 exps:["Incorrect. LAG() looks back; LEAD() looks forward.","✓ Correct. LEAD(col, n) looks n rows AHEAD (forward) in the ordered window. LEAD(salary, 1) gives the salary of the next row in the ORDER BY sequence. For the last row in a partition, it returns NULL (by default).","Incorrect. FIRST_VALUE() gives the first row's value.","Incorrect. The current row's salary is just 'salary' without any window function."]},

{q:"What does PARTITION BY do in a window function?",trap:false,
 opts:["Splits the physical table into separate disk partitions","Divides the rows into logical groups (partitions) within which the window function is independently calculated","Creates a new table for each partition","Is identical to GROUP BY"],
 ans:1,
 exps:["Incorrect. Physical table partitioning is a storage/DBA concept separate from PARTITION BY in window functions.","✓ Correct. PARTITION BY in an OVER() clause restarts the window function calculation for each distinct group (partition). Similar to GROUP BY but without collapsing rows. E.g., RANK() OVER (PARTITION BY dept ORDER BY salary) ranks within each department separately.","Incorrect. PARTITION BY doesn't create physical tables.","Incorrect. GROUP BY collapses rows; PARTITION BY does not — all original rows remain."]},

{q:"What does a moving average compute?",trap:false,
 opts:["The average of all rows in the table","The average of a fixed number of preceding rows for each row (rolling window)","The maximum value in the table","The cumulative sum up to each row"],
 ans:1,
 exps:["Incorrect. A simple overall average uses AVG() with no window.","✓ Correct. A moving average (rolling average) computes the average over a sliding window of rows. Example: AVG(sales) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) gives a 7-day moving average.","Incorrect. MAX() gives the maximum value.","Incorrect. Cumulative sum uses SUM() OVER (ORDER BY date ROWS UNBOUNDED PRECEDING)."]},

{q:"TRAP: Can window functions be used in a WHERE clause?",trap:true,
 opts:["Yes — window functions can be used anywhere in a query","No — window functions cannot be used in WHERE or HAVING; use a subquery or CTE","Yes — but only with PARTITION BY","No — window functions can only be in ORDER BY"],
 ans:1,
 exps:["Incorrect. Window functions are restricted to certain clauses.","✓ Correct. Window functions are computed in the SELECT phase (after FROM, WHERE, GROUP BY, HAVING). You cannot use them in WHERE or HAVING (which run earlier). To filter by a window function result, wrap the query in a subquery or CTE and filter the outer query.","Incorrect. PARTITION BY doesn't enable WHERE usage.","Incorrect. Window functions are valid in SELECT and ORDER BY, not WHERE."]},

{q:"SUM(salary) OVER (ORDER BY hire_date ROWS UNBOUNDED PRECEDING) computes:",trap:false,
 opts:["The total salary of all employees","A running (cumulative) total — sum of all salaries from the beginning up to the current row","The salary of the most recently hired employee","The sum of salaries for the next rows"],
 ans:1,
 exps:["Incorrect. SUM() without OVER() would give total salary.","✓ Correct. ROWS UNBOUNDED PRECEDING means 'from the very first row up to and including the current row' — this is a cumulative/running total. It increases as you go down the ordered result set.","Incorrect. That would use LAST_VALUE() or ORDER BY hire_date DESC LIMIT 1.","Incorrect. ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING would sum future rows."]},

{q:"What is the default window frame if you specify ORDER BY but no explicit ROWS/RANGE clause?",trap:true,
 opts:["All rows in the partition (ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)","RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW (all rows from start to current, including peers)","ROWS BETWEEN CURRENT ROW AND CURRENT ROW (only the current row)","ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING (3-row window)"],
 ans:1,
 exps:["Incorrect. That's the default when NO ORDER BY is specified.","✓ Correct. When ORDER BY is specified without an explicit ROWS/RANGE frame, the default is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. This includes all rows from the start of the partition to the current row and any 'peers' (rows with same ORDER BY value). This can cause surprising cumulative behavior.","Incorrect. That would be ROWS BETWEEN CURRENT ROW AND CURRENT ROW.","Incorrect. A 3-row window must be explicitly specified."]},

{q:"FIRST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary DESC) returns:",trap:false,
 opts:["The lowest salary in each department","The highest salary in each department","The first salary in the original table","The average salary in each department"],
 ans:1,
 exps:["Incorrect. ORDER BY salary DESC means the first value is the HIGHEST, not lowest.","✓ Correct. FIRST_VALUE() returns the value from the first row of the window. With PARTITION BY dept ORDER BY salary DESC, the first row in each partition is the highest salary, so FIRST_VALUE returns the max salary for each department.","Incorrect. PARTITION BY dept makes this per-department, not the overall first row.","Incorrect. AVG() computes averages."]},

{q:"What is the purpose of NTILE(4) OVER (ORDER BY salary)?",trap:false,
 opts:["Rounds salary to 4 decimal places","Divides rows into 4 roughly equal groups (quartiles) and assigns each row a group number 1-4","Selects only every 4th row","Creates 4 copies of each row"],
 ans:1,
 exps:["Incorrect. Rounding is done by ROUND().","✓ Correct. NTILE(n) divides the ordered rows into n buckets as evenly as possible and assigns a bucket number (1 to n) to each row. NTILE(4) creates quartiles — group 1 is the bottom 25%, group 4 is the top 25%.","Incorrect. Every-nth-row selection requires modular arithmetic or ROW_NUMBER().","Incorrect. NTILE assigns a group label; it doesn't duplicate rows."]},

{q:"To find the top earner PER DEPARTMENT without using GROUP BY, which window function helps?",trap:false,
 opts:["COUNT()","RANK() OVER (PARTITION BY dept ORDER BY salary DESC) — then filter for rank = 1","SUM() OVER (PARTITION BY dept)","NTILE(1)"],
 ans:1,
 exps:["Incorrect. COUNT() counts rows; doesn't help find the top earner.","✓ Correct. RANK() (or ROW_NUMBER() or DENSE_RANK()) OVER (PARTITION BY dept ORDER BY salary DESC) assigns rank 1 to the top earner in each department. Wrap in a subquery: SELECT * FROM (SELECT *, RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk FROM employees) WHERE rnk = 1.","Incorrect. SUM() OVER (PARTITION BY dept) computes the department salary total per row — not the top earner.","Incorrect. NTILE(1) would put everyone in group 1."]},

{q:"What does ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING define as the window frame?",trap:false,
 opts:["All rows from the beginning to 1 row after current","A 3-row window: the row before current, the current row, and the row after current","Only the current row","All rows in the partition"],
 ans:1,
 exps:["Incorrect. That would be ROWS BETWEEN UNBOUNDED PRECEDING AND 1 FOLLOWING.","✓ Correct. ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING includes: 1 row before current + current row + 1 row after current = 3 rows total. Useful for centered moving averages.","Incorrect. ROWS BETWEEN CURRENT ROW AND CURRENT ROW is just the current row.","Incorrect. All rows would be ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING."]},

{q:"In what order does SQL process window functions?",trap:true,
 opts:["Before WHERE — window functions run first","After FROM, WHERE, GROUP BY, HAVING, and SELECT — window functions are computed last (before ORDER BY)","Before GROUP BY — window functions feed into GROUP BY","At the same time as WHERE"],
 ans:1,
 exps:["Incorrect. WHERE runs early in execution; window functions run much later.","✓ Correct. Window functions are computed in the SELECT phase, AFTER: FROM → WHERE → GROUP BY → HAVING. Window functions see the full result of all prior filtering/grouping. They are computed before the final ORDER BY.","Incorrect. Window functions run AFTER GROUP BY, not before.","Incorrect. They run at completely different stages."]},

{q:"LAG(salary, 2, 0) OVER (ORDER BY hire_date) — what does the '0' parameter do?",trap:false,
 opts:["Shifts by 0 rows (same as no LAG)","Provides a default value of 0 when there is no row 2 positions back (e.g., for the first two rows)","Multiplies the result by 0","Is invalid — LAG only takes 2 parameters"],
 ans:1,
 exps:["Incorrect. The '2' is the offset; '0' is the default value.","✓ Correct. LAG(col, offset, default) — the third argument is the default value returned when the offset goes beyond the partition boundary (e.g., for the first 2 rows when offset=2, there is no preceding row). Without a default, NULL is returned.","Incorrect. The default value is returned for out-of-bound positions, not used as a multiplier.","Incorrect. LAG accepts up to 3 parameters: (value, offset, default)."]},

{q:"TRAP: RANK() and ROW_NUMBER() always produce different results.",trap:true,
 opts:["True — they always produce different results for every row","False — they produce identical results when there are no ties in the ORDER BY columns","True — ROW_NUMBER is always higher than RANK","False — they are exactly the same function with different names"],
 ans:1,
 exps:["Incorrect. When there are no ties, their output is identical.","✓ Correct. RANK() and ROW_NUMBER() produce different results only when there are TIES. With no ties (all ORDER BY values are distinct), both produce 1, 2, 3, ... — identical results.","Incorrect. With no ties, they produce the same numbers.","Incorrect. They have different tie-handling behavior — RANK() gives tied rows the same rank with gaps; ROW_NUMBER() always gives unique sequential numbers."]},
],

// ─────────────────────────────────────────
// TOPIC 7 – Subqueries (35 Qs)
// ─────────────────────────────────────────
[
{q:"What is a subquery in SQL?",trap:false,
 opts:["A query stored permanently in the database","A query nested inside another SQL query","A query that runs on a subset of columns","A query that joins two tables"],
 ans:1,
 exps:["Incorrect. A permanently stored query is a view or stored procedure.","✓ Correct. A subquery (inner query / nested query) is a SELECT statement embedded inside another SQL statement (the outer query). The inner query runs first and its result is used by the outer query.","Incorrect. Selecting a subset of columns uses the SELECT column list.","Incorrect. JOINs combine tables; subqueries are nested queries."]},

{q:"A subquery in the FROM clause is also called a:",trap:false,
 opts:["Correlated subquery","Inline view / derived table","Scalar subquery","Exists subquery"],
 ans:1,
 exps:["Incorrect. A correlated subquery references the outer query in its WHERE clause.","✓ Correct. A subquery in the FROM clause acts as a temporary, derived table (also called inline view). The outer query treats it like a regular table: SELECT * FROM (SELECT ... FROM t WHERE ...) AS derived.","Incorrect. A scalar subquery returns a single value and typically appears in SELECT or WHERE.","Incorrect. An EXISTS subquery uses the EXISTS operator."]},

{q:"A SCALAR subquery returns:",trap:false,
 opts:["Multiple rows and multiple columns","Exactly one row and one column (a single value)","Multiple rows but one column","No rows — it is only for checking existence"],
 ans:1,
 exps:["Incorrect. That would be a table subquery, used in FROM.","✓ Correct. A scalar subquery must return exactly ONE row and ONE column. It's used in SELECT or WHERE where a single value is expected. Example: SELECT name, (SELECT AVG(salary) FROM employees) AS avg_salary FROM employees.","Incorrect. A column subquery returns one column, multiple rows (used with IN).","Incorrect. EXISTS checks for existence; a scalar subquery returns a single value."]},

{q:"What is a CORRELATED subquery?",trap:false,
 opts:["A subquery that runs only once and is independent of the outer query","A subquery that references columns from the outer query and is re-executed for each row of the outer query","A subquery with multiple SELECT statements","A subquery used only in the FROM clause"],
 ans:1,
 exps:["Incorrect. That describes a non-correlated (simple) subquery.","✓ Correct. A correlated subquery refers to the outer query's table/columns in its WHERE (or other) clause. It must re-execute for EACH ROW of the outer query, making it potentially slower but more powerful for row-by-row comparisons.","Incorrect. A correlated subquery has a single SELECT.","Incorrect. Correlated subqueries are most commonly in WHERE, not FROM."]},

{q:"Which of the following is a NON-CORRELATED (simple) subquery?",trap:true,
 opts:["SELECT * FROM employees e WHERE salary > (SELECT salary FROM employees WHERE id = e.manager_id)","SELECT * FROM employees WHERE dept_id IN (SELECT id FROM departments WHERE name = 'IT')","Both are correlated","Both are non-correlated"],
 ans:1,
 exps:["Incorrect. The first references 'e.manager_id' from the outer query — that's correlated.","✓ Correct. The second subquery (SELECT id FROM departments WHERE name = 'IT') has NO reference to the outer query (employees). It runs once and returns a list of IDs. This is non-correlated — independent of the outer query.","Incorrect. Only the first is correlated.","Incorrect. The first is correlated because it references the outer alias 'e'."]},

{q:"TRAP: Correlated subqueries are always more efficient than non-correlated subqueries.",trap:true,
 opts:["True — correlated subqueries use indexes more effectively","False — correlated subqueries re-execute for each outer row, making them potentially very slow compared to non-correlated subqueries that run only once","True — they avoid redundant table scans","False — both types have identical performance"],
 ans:1,
 exps:["Incorrect. Correlated subqueries don't inherently use indexes better.","✓ Correct. Correlated subqueries re-run for EVERY row of the outer query — if the outer query returns 1 million rows, the inner query runs 1 million times. Non-correlated subqueries run ONCE. For large datasets, non-correlated or JOIN-based approaches are typically more efficient.","Incorrect. Correlated subqueries often cause redundant table scans per outer row.","Incorrect. Correlated subqueries are typically SLOWER due to per-row execution."]},

{q:"A subquery used with IN vs EXISTS — what is the main difference?",trap:false,
 opts:["They are identical in behavior","IN returns the full result set and checks membership; EXISTS stops as soon as one row is found (short-circuits) and is often more efficient for large datasets","EXISTS is used with numbers only; IN is used with text","IN is for subqueries; EXISTS is for JOINs"],
 ans:1,
 exps:["Incorrect. They behave differently, especially with NULLs and performance.","✓ Correct. IN evaluates the full subquery result then checks if the value is in that set. EXISTS immediately stops scanning as soon as one matching row is found (short-circuit). For large datasets, EXISTS is often faster. Also, IN with NULL in the subquery can cause issues (NOT IN problem); NOT EXISTS handles NULLs safely.","Incorrect. Both work with any data type.","Incorrect. EXISTS is used with subqueries, not JOINs."]},

{q:"WHERE col = (SELECT MAX(col) FROM table) — what kind of subquery is this?",trap:false,
 opts:["Correlated subquery","Non-correlated scalar subquery","Column subquery","Table subquery"],
 ans:1,
 exps:["Incorrect. This subquery has no reference to the outer query — it's non-correlated.","✓ Correct. SELECT MAX(col) FROM table returns a single value (one row, one column) and has no reference to the outer query. It's a non-correlated scalar subquery used in a WHERE comparison.","Incorrect. A column subquery returns multiple rows, one column — used with IN.","Incorrect. A table subquery returns multiple rows and columns — used in FROM."]},

{q:"Can you use a subquery in the SELECT clause?",trap:false,
 opts:["No — subqueries are only allowed in WHERE","Yes — but only if the subquery returns exactly one value (scalar subquery)","Yes — any subquery returning multiple rows is allowed in SELECT","No — use JOIN instead of SELECT subqueries"],
 ans:1,
 exps:["Incorrect. Subqueries are valid in SELECT, FROM, WHERE, and HAVING.","✓ Correct. A scalar subquery in the SELECT clause must return exactly ONE row and ONE column. Example: SELECT name, (SELECT MAX(salary) FROM employees) FROM employees — appends the max salary to every row.","Incorrect. Subqueries returning multiple rows in SELECT would cause an error (more than one row returned by a subquery used as an expression).","Incorrect. Both subqueries and JOINs are valid; the choice depends on the use case."]},

{q:"TRAP: NOT IN with a subquery that returns NULLs always works correctly.",trap:true,
 opts:["True — NOT IN handles NULLs gracefully","False — if the subquery returns any NULL, NOT IN returns an empty result set (no rows match) — a common bug","True — NULLs are treated as no-match by NOT IN","False — NOT IN with NULL raises a runtime error"],
 ans:1,
 exps:["Incorrect. NOT IN is famously broken with NULLs.","✓ Correct. WHERE id NOT IN (SELECT manager_id FROM employees) — if any manager_id is NULL, the NOT IN condition becomes: id != 1 AND id != 2 AND id != NULL. Since id != NULL is UNKNOWN, the entire result is UNKNOWN/empty. Use NOT EXISTS or add WHERE manager_id IS NOT NULL to the subquery.","Incorrect. NULLs in NOT IN poison the comparison and return no rows.","Incorrect. It's a logical bug, not a syntax error."]},

{q:"What is the advantage of a subquery over a JOIN in some cases?",trap:false,
 opts:["Subqueries are always faster than JOINs","Subqueries can be more readable for existence checks and returning single-value comparisons","JOINs cannot be used with aggregate functions; subqueries can","Subqueries don't require ON conditions; JOINs always do"],
 ans:1,
 exps:["Incorrect. JOINs are often (not always) more efficient for large datasets.","✓ Correct. Subqueries are often more readable for: (1) checking existence (EXISTS), (2) comparing to an aggregate (WHERE salary > (SELECT AVG(salary)...)), (3) when you don't need columns from both tables.","Incorrect. JOINs can absolutely be used with aggregate functions.","Incorrect. This is about syntax preference, not a rule."]},

{q:"A subquery that returns multiple rows can be used with which operator?",trap:false,
 opts:["= (equals)","IN / NOT IN / ANY / ALL / EXISTS","LIKE","BETWEEN"],
 ans:1,
 exps:["Incorrect. = expects exactly one value (scalar). Using = with a multi-row subquery causes an error.","✓ Correct. Multi-row subqueries must use: IN (matches any value in the set), NOT IN, ANY (e.g., > ANY returns true if greater than at least one), ALL (greater than all), or EXISTS (checks if rows exist).","Incorrect. LIKE requires a literal pattern string.","Incorrect. BETWEEN requires two scalar values."]},

{q:"SELECT name FROM employees WHERE salary > ALL (SELECT salary FROM employees WHERE dept = 'HR'); — what does this find?",trap:false,
 opts:["Employees earning more than the minimum HR salary","Employees earning more than the maximum HR salary — greater than ALL values in the HR set","Employees in the HR department earning more than average","Employees earning the average of all HR salaries"],
 ans:1,
 exps:["Incorrect. > ANY would check against minimum.","✓ Correct. > ALL means 'greater than every value in the subquery result'. Since the employee's salary must exceed ALL HR salaries, it must exceed even the highest HR salary. This is equivalent to > MAX(HR salary).","Incorrect. No department filtering is applied to the outer query.","Incorrect. AVG is not computed by the ALL operator."]},

{q:"What is a CTE (Common Table Expression) and how does it relate to subqueries?",trap:false,
 opts:["CTE is only for recursive queries","CTE (WITH clause) is a named temporary result set that can be referenced multiple times in a query — a cleaner alternative to nested subqueries","CTE permanently stores the result in a table","CTE is identical to a VIEW"],
 ans:1,
 exps:["Incorrect. CTEs can be used for both regular and recursive queries.","✓ Correct. WITH cte_name AS (SELECT ...) SELECT * FROM cte_name; A CTE names the subquery result, making it reusable and improving readability. Unlike subqueries, CTEs can reference themselves (recursive CTEs).","Incorrect. CTEs are temporary — they exist only for the duration of the query.","Incorrect. Views are persistent database objects; CTEs are query-scoped temporary expressions."]},

{q:"TRAP: A subquery in the FROM clause must always have an alias.",trap:true,
 opts:["False — aliases are optional in FROM subqueries","True — in most SQL databases, subqueries in FROM must have an alias to be referenced by the outer query","True — but the alias must match the original table name","False — the subquery name is automatically generated"],
 ans:1,
 exps:["Incorrect. In most DBMS, FROM subqueries require an alias.","✓ Correct. In SQL standard (and PostgreSQL/MySQL/SQL Server), every derived table (subquery in FROM) must have an alias. Example: SELECT * FROM (SELECT * FROM employees) AS emp_sub; — 'AS emp_sub' is required. Without an alias, you get an error.","Incorrect. The alias can be any valid identifier.","Incorrect. Aliases are not auto-generated in standard SQL."]},

{q:"Which of the following is the most common use case for a correlated subquery?",trap:false,
 opts:["Returning a list of all department IDs","Finding records where a value exceeds the average/total for that record's own group","Counting all rows in a table","Joining more than 3 tables"],
 ans:1,
 exps:["Incorrect. A simple SELECT or non-correlated subquery handles that.","✓ Correct. Correlated subqueries shine when you need to compare each row to an aggregate computed over its own group. Example: find employees earning more than their department's average salary. The inner query uses the outer row's department to compute the right average.","Incorrect. COUNT(*) handles row counting — no correlated subquery needed.","Incorrect. Multi-table JOINs don't require correlated subqueries."]},
],

// ─────────────────────────────────────────
// TOPIC 8 – Joins & Set Operations (40 Qs)
// ─────────────────────────────────────────
[
{q:"What does an INNER JOIN return?",trap:false,
 opts:["All rows from both tables, with NULLs for non-matching rows","Only rows where there is a match in BOTH tables based on the join condition","All rows from the left table and matching rows from the right table","Only rows from the table listed second (right table)"],
 ans:1,
 exps:["Incorrect. That describes FULL OUTER JOIN.","✓ Correct. INNER JOIN returns only the rows where the join condition is TRUE in BOTH tables. Rows with no matching partner in the other table are excluded from the result.","Incorrect. That describes LEFT JOIN.","Incorrect. That describes RIGHT JOIN."]},

{q:"What does a LEFT JOIN (LEFT OUTER JOIN) return?",trap:false,
 opts:["Only matching rows from both tables","All rows from the LEFT table and matched rows from the RIGHT table; non-matched right side is NULL","All rows from the RIGHT table and matched rows from the LEFT table","All rows from both tables with no NULLs"],
 ans:1,
 exps:["Incorrect. INNER JOIN returns only matching rows.","✓ Correct. LEFT JOIN: ALL rows from the left table are preserved. For rows with no match in the right table, the right table's columns are filled with NULL. This ensures no left table row is lost.","Incorrect. That describes RIGHT JOIN.","Incorrect. That describes FULL OUTER JOIN (and would still have NULLs for non-matches)."]},

{q:"What is a CARTESIAN PRODUCT and when does it occur in SQL?",trap:true,
 opts:["When using FULL OUTER JOIN","When a JOIN is written without an ON/WHERE condition, combining every row of table A with every row of table B","When using UNION ALL","When two tables have no common columns"],
 ans:1,
 exps:["Incorrect. FULL OUTER JOIN uses a join condition; it doesn't produce a full Cartesian product.","✓ Correct. Cartesian product (cross join) occurs when you JOIN tables without a join condition: SELECT * FROM A, B; or SELECT * FROM A CROSS JOIN B; — every row of A is paired with every row of B. If A has 100 rows and B has 50, the result has 5,000 rows. It's usually an accident.","Incorrect. UNION ALL stacks result sets vertically, not creating row combinations.","Incorrect. Tables without common columns can still be joined (on any condition) without creating a Cartesian product."]},

{q:"TRAP: A SELF JOIN joins a table to a completely different table.",trap:true,
 opts:["True — a self join requires two different tables","False — a self join joins a table to ITSELF, using different aliases to distinguish the two references","True — 'self' refers to the database itself","False — self joins are not valid SQL"],
 ans:1,
 exps:["Incorrect. Self join uses one table.","✓ Correct. A self join joins a table to itself by using two aliases. Example: to find employees and their managers: SELECT e.name, m.name AS manager FROM employees e JOIN employees m ON e.manager_id = m.id. Both 'e' and 'm' reference the same employees table.","Incorrect. 'Self' refers to the same table, not the database.","Incorrect. Self joins are completely valid SQL."]},

{q:"What does a FULL OUTER JOIN return?",trap:false,
 opts:["Only matching rows from both tables","All rows from BOTH tables; NULLs fill unmatched sides","All rows from the left table only","All rows from the right table only"],
 ans:1,
 exps:["Incorrect. INNER JOIN returns only matching rows.","✓ Correct. FULL OUTER JOIN preserves ALL rows from BOTH tables. Where there's no match from the right, right columns are NULL. Where there's no match from the left, left columns are NULL.","Incorrect. LEFT JOIN preserves only the left table.","Incorrect. RIGHT JOIN preserves only the right table."]},

{q:"What is the difference between a JOIN condition in ON vs filtering in WHERE?",trap:true,
 opts:["They are identical — ON and WHERE produce the same results for all join types","For INNER JOIN they're equivalent, but for OUTER JOINs: ON condition is applied during join (preserving outer rows); WHERE is applied after (filtering out NULL rows, turning the outer join into an inner join)","ON is only for table conditions; WHERE is only for column conditions","WHERE is applied before ON in execution order"],
 ans:1,
 exps:["Incorrect. For OUTER JOINs, the placement of conditions matters significantly.","✓ Correct. With LEFT JOIN: if you put a right-table condition in WHERE, rows with NULL right-side (unmatched) are filtered out — effectively making it an INNER JOIN. Putting the same condition in ON preserves left rows with NULL right side. This is a critical and common exam trap.","Incorrect. Both ON and WHERE can have any type of condition.","Incorrect. ON is applied during the JOIN; WHERE is applied after."]},

{q:"UNION vs UNION ALL — what is the difference?",trap:false,
 opts:["UNION returns all rows including duplicates; UNION ALL removes duplicates","UNION removes duplicate rows; UNION ALL includes all rows (including duplicates)","They are identical","UNION ALL is slower than UNION"],
 ans:1,
 exps:["Incorrect. This is reversed.","✓ Correct. UNION combines result sets and REMOVES duplicate rows (performs a DISTINCT). UNION ALL combines result sets and KEEPS ALL rows including duplicates. UNION ALL is faster because it skips the deduplication step.","Incorrect. They differ in duplicate handling.","Incorrect. UNION ALL is actually FASTER because it doesn't need to sort/deduplicate."]},

{q:"For UNION to work, the SELECT statements must:",trap:false,
 opts:["Reference the same tables","Have the same number of columns with compatible data types","Have the same WHERE conditions","Use the same ORDER BY clause"],
 ans:1,
 exps:["Incorrect. UNION can combine results from different tables.","✓ Correct. UNION requirements: (1) same number of columns in each SELECT, (2) corresponding columns must have compatible (or castable) data types. Column names in the result come from the FIRST SELECT statement.","Incorrect. WHERE conditions can differ completely.","Incorrect. Only one ORDER BY is used at the end of the combined query."]},

{q:"INTERSECT in SQL returns:",trap:false,
 opts:["All rows from both queries combined","Only rows that appear in BOTH query results (the common rows)","Rows that appear in the first query but not the second","Rows that appear in either query but not both"],
 ans:1,
 exps:["Incorrect. UNION ALL returns all combined rows.","✓ Correct. INTERSECT returns only the rows that are present in BOTH result sets — the mathematical intersection. Duplicates within the intersection are removed.","Incorrect. EXCEPT (or MINUS in Oracle) returns rows in first but not second.","Incorrect. That would be the symmetric difference (UNION minus INTERSECT)."]},

{q:"EXCEPT (or MINUS) returns:",trap:false,
 opts:["All rows from both queries","Rows that are in both queries","Rows that appear in the FIRST query but NOT in the second query","Rows that appear in the SECOND query but not the first"],
 ans:2,
 exps:["Incorrect. UNION returns all rows from both.","Incorrect. INTERSECT returns rows in both.","✓ Correct. EXCEPT (SQL standard) / MINUS (Oracle) returns the rows of the first query that do NOT appear in the second query. Like set difference: A minus B.","Incorrect. You'd need to switch the order: query2 EXCEPT query1."]},

{q:"TRAP: RIGHT JOIN is just LEFT JOIN with the tables swapped.",trap:true,
 opts:["False — RIGHT JOIN has completely different behavior","True — SELECT * FROM A RIGHT JOIN B is equivalent to SELECT * FROM B LEFT JOIN A (same data, same result)","False — RIGHT JOIN returns more rows than LEFT JOIN","True — but only for INNER JOINs"],
 ans:1,
 exps:["Incorrect. RIGHT JOIN behavior is the same as LEFT JOIN with tables swapped.","✓ Correct. A RIGHT JOIN is logically equivalent to a LEFT JOIN with the table order reversed. Most developers avoid RIGHT JOIN for readability — rewrite as LEFT JOIN with tables in the other order. Both produce the same data.","Incorrect. They can return the same number of rows.","Incorrect. INNER JOIN doesn't distinguish left/right."]},

{q:"What is the result of joining two tables on a column where the left table has 5 rows and the right table has 3 rows with full matches?",trap:true,
 opts:["Always 15 rows (5 × 3 Cartesian product)","Depends on the join type — INNER JOIN gives matched rows; LEFT JOIN gives at least 5 rows","Always 5 rows","Always 8 rows (5 + 3)"],
 ans:1,
 exps:["Incorrect. The Cartesian product only occurs without a join condition.","✓ Correct. Result depends on join type and data: INNER JOIN = rows with matches in both (≤5 and ≤3). LEFT JOIN = at least 5 rows (all left rows preserved). If one left row matches 3 right rows, you'd get more than 5 rows total (one-to-many).","Incorrect. Only if there's exactly one match per left row in an INNER JOIN.","Incorrect. Addition is not how JOINs work."]},

{q:"When should you use LEFT JOIN instead of INNER JOIN?",trap:false,
 opts:["When you want only matching rows","When you want ALL rows from the left table, even if there's no match in the right table","When both tables have the same number of rows","When filtering with WHERE on the right table"],
 ans:1,
 exps:["Incorrect. INNER JOIN returns only matching rows.","✓ Correct. Use LEFT JOIN when you want to preserve all records from the left table, regardless of whether a match exists in the right table. Useful for finding records with no related record (WHERE right.id IS NULL).","Incorrect. Row count doesn't determine join type.","Incorrect. Filtering the right table in WHERE after a LEFT JOIN turns it into an INNER JOIN."]},

{q:"Can you JOIN more than two tables in a single SQL query?",trap:false,
 opts:["No — SQL only supports two tables per JOIN","Yes — you can chain multiple JOINs to combine any number of tables","Yes — but only up to 3 tables","No — use subqueries for more than 2 tables"],
 ans:1,
 exps:["Incorrect. SQL supports chaining multiple JOINs.","✓ Correct. You can JOIN as many tables as needed: SELECT * FROM A JOIN B ON A.id = B.a_id JOIN C ON B.id = C.b_id JOIN D ON C.id = D.c_id; Each JOIN adds another table to the result.","Incorrect. No hard limit of 3 in the SQL standard.","Incorrect. Multiple JOINs are the standard approach; subqueries are an alternative."]},

{q:"What does this query find? SELECT * FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.a_id IS NULL;",trap:true,
 opts:["All rows from A that have a match in B","All rows from A that have NO match in B (orphan rows in A)","All NULL values in table B","Rows where both A.id and B.a_id are NULL"],
 ans:1,
 exps:["Incorrect. If B.a_id IS NOT NULL, then a match exists.","✓ Correct. This is the 'anti-join' pattern. LEFT JOIN preserves all A rows; when there's no match in B, B columns are NULL. WHERE B.a_id IS NULL filters to ONLY those non-matching rows — giving you rows in A with no corresponding row in B.","Incorrect. This is filtering on join result NULLs, not NULLs already in B.","Incorrect. This pattern specifically finds A rows unmatched in B."]},

{q:"What are the requirements for UNION vs INTERSECT vs EXCEPT?",trap:false,
 opts:["All require the same table","All require the same number of columns with compatible data types in each SELECT","They have different requirements — UNION needs more columns than INTERSECT","EXCEPT requires PRIMARY KEY columns"],
 ans:1,
 exps:["Incorrect. Set operations can combine results from different tables.","✓ Correct. All three set operations (UNION, INTERSECT, EXCEPT) require: (1) same number of columns in each SELECT, (2) corresponding columns must have compatible data types. This is the same requirement as UNION.","Incorrect. All three have identical structural requirements.","Incorrect. No PRIMARY KEY requirement exists for set operations."]},

{q:"TRAP: JOINs and subqueries always produce identical results.",trap:true,
 opts:["True — any JOIN can be rewritten as a subquery with identical results","False — JOINs can return duplicate rows when one row matches multiple rows in the joined table; subqueries using EXISTS don't duplicate rows","True — they're just different syntax for the same operation","False — subqueries can never replicate JOIN behavior"],
 ans:1,
 exps:["Incorrect. They can produce different results, especially with duplicates.","✓ Correct. A key difference: if A has one row and B has 3 matching rows, INNER JOIN returns 3 rows. An EXISTS subquery (SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE...)) returns 1 row from A. The choice affects whether duplicated right-table matches multiply the result.","Incorrect. They are not always equivalent in terms of result rows.","Incorrect. Subqueries can replicate most JOIN behavior, just differently."]},

{q:"The ON clause in a JOIN:",trap:false,
 opts:["Is optional and JOINs work without it","Specifies the condition on which the two tables are joined — how rows from each table are matched","Filters rows after the JOIN, like WHERE","Must always use the primary key column"],
 ans:1,
 exps:["Incorrect. Without ON (or USING), you get a Cartesian product (CROSS JOIN).","✓ Correct. ON condition specifies how to match rows from both tables: JOIN employees e ON e.dept_id = departments.id. It defines the relationship between the tables.","Incorrect. WHERE filters AFTER the join is formed; ON defines HOW the join is formed.","Incorrect. You can join on any column(s), not just primary keys (though PK-FK joins are most common)."]},
],

// ─────────────────────────────────────────
// TOPIC 9 – Data Modelling & ER (35 Qs)
// ─────────────────────────────────────────
[
{q:"What is the purpose of data modelling?",trap:false,
 opts:["To write SQL queries for a database","To create an abstract representation of data structures, relationships, and constraints before building the actual database","To encrypt sensitive database fields","To optimize query performance"],
 ans:1,
 exps:["Incorrect. SQL queries interact with an existing database; modelling comes before that.","✓ Correct. Data modelling creates a blueprint of the database — defining entities, attributes, relationships, and constraints — before physical implementation. It ensures the design meets business requirements.","Incorrect. Encryption is a security technique applied after modelling.","Incorrect. Query optimization happens after the database is built."]},

{q:"What does ER stand for in ER Modelling?",trap:false,
 opts:["Electronic Record","Entity-Relationship","External Resource","Enhanced Relational"],
 ans:1,
 exps:["Incorrect. Electronic Record is not the meaning here.","✓ Correct. ER = Entity-Relationship. ER modelling (proposed by Peter Chen in 1976) is a high-level conceptual data model that represents data as entities (things) and the relationships between them.","Incorrect. External Resource is not a data modelling term.","Incorrect. Enhanced Relational is a variation concept; the basic term is Entity-Relationship."]},

{q:"In an ER diagram, entities are typically represented as:",trap:false,
 opts:["Ovals/ellipses","Rectangles/boxes","Diamonds","Lines/arrows"],
 ans:1,
 exps:["Incorrect. Ovals/ellipses represent attributes in Chen notation.","✓ Correct. In Chen's ER notation: Rectangles = Entities, Ovals/Ellipses = Attributes, Diamonds = Relationships, Lines = connections between them.","Incorrect. Diamonds represent relationships in Chen notation.","Incorrect. Lines connect entities and relationships."]},

{q:"In an ER diagram, relationships are represented as:",trap:false,
 opts:["Rectangles","Ovals/ellipses","Diamonds","Double rectangles"],
 ans:2,
 exps:["Incorrect. Rectangles represent entities.","Incorrect. Ovals represent attributes.","✓ Correct. Diamonds represent relationship types in Chen's ER notation. The diamond is labeled with the relationship name (e.g., 'WORKS_IN', 'TEACHES').","Incorrect. Double rectangles represent weak entities (in some notations)."]},

{q:"What is a 'weak entity' in ER modelling?",trap:false,
 opts:["An entity with fewer attributes than average","An entity that cannot be uniquely identified by its own attributes alone — it depends on a related (owner/parent) entity for identification","An entity with only one relationship","An entity that stores optional data"],
 ans:1,
 exps:["Incorrect. The number of attributes doesn't determine weakness.","✓ Correct. A weak entity lacks sufficient attributes to form its own primary key — it borrows part of its identity from its 'owner' (strong) entity. Example: 'ORDER_ITEM' is weak — it needs the ORDER_ID plus line number to be unique. It has a 'partial key' (discriminator).","Incorrect. Any entity can have multiple or few relationships.","Incorrect. Optional data is about NULLability, not entity strength."]},

{q:"What does a 1:N (one-to-many) relationship mean?",trap:false,
 opts:["One table can JOIN to multiple tables","One instance of entity A can be associated with many instances of entity B, but each instance of B is associated with at most one instance of A","Each instance of A relates to exactly one instance of B","Many instances of A relate to many instances of B"],
 ans:1,
 exps:["Incorrect. This describes table joins in SQL, not ER relationships.","✓ Correct. 1:N (one-to-many): One DEPARTMENT can have MANY EMPLOYEEs, but each EMPLOYEE belongs to at most one DEPARTMENT. The 'many' side gets the foreign key.","Incorrect. That would be 1:1 (one-to-one).","Incorrect. That would be M:N (many-to-many)."]},

{q:"How is an M:N (many-to-many) relationship typically implemented in a relational database?",trap:false,
 opts:["By putting a foreign key on both original tables pointing at each other","By creating a junction (bridge/associative) table with foreign keys referencing both original tables","By merging both tables into one","By using a UNION query"],
 ans:1,
 exps:["Incorrect. This would create a circular FK dependency.","✓ Correct. M:N relationships need a junction (intersection/bridge) table. Example: Students and Courses have M:N relationship — create 'Enrollment' table with student_id (FK) and course_id (FK). The junction table's PK is typically the composite of both FKs.","Incorrect. Merging tables destroys the ability to track the relationship.","Incorrect. UNION stacks result sets; it doesn't implement a relationship."]},

{q:"What is a 'partial key' (discriminator) in ER modelling?",trap:false,
 opts:["A key that only works for some rows","An attribute of a weak entity that, combined with the owner entity's key, uniquely identifies the weak entity","A primary key with NULL values","A key used only for partial lookups"],
 ans:1,
 exps:["Incorrect. A partial key relates to weak entity identification, not selective row coverage.","✓ Correct. A partial key (discriminator) is an attribute that partially identifies a weak entity within its owner's context. E.g., ORDER_ITEM has 'line_number' as its partial key — unique within each order but not globally unique. Combined with ORDER_ID, it fully identifies the item.","Incorrect. Primary keys cannot have NULLs.","Incorrect. This is not a query optimization term."]},

{q:"What are the three levels of data modelling?",trap:false,
 opts:["Physical, Binary, Logical","Conceptual (High-level), Logical, Physical","External, Internal, Network","Table, Schema, Database"],
 ans:1,
 exps:["Incorrect. Binary is not a data modelling level.","✓ Correct. Three levels: (1) Conceptual/High-level: ER diagrams, entities, relationships — what data is needed (business view). (2) Logical: tables, columns, data types, normalization — platform-independent DB structure. (3) Physical: actual implementation details (storage engines, indexes, partitioning).","Incorrect. External/Internal are ANSI/SPARC architecture levels.","Incorrect. These are database objects, not modelling levels."]},

{q:"TRAP: Cardinality in ER modelling means the same thing as cardinality of a relation.",trap:true,
 opts:["True — cardinality always means the number of rows","False — in ER modelling, cardinality describes the relationship ratio (1:1, 1:N, M:N); in relation theory, cardinality means the number of rows/tuples","True — both refer to the count of entities","False — ER cardinality refers to data types"],
 ans:1,
 exps:["Incorrect. The term is overloaded — context matters.","✓ Correct. ER cardinality: how entities relate (one-to-one, one-to-many, many-to-many — the ratio between entity instances). Relation cardinality: number of tuples (rows) in a relation. Same word, different contexts — a classic exam trap.","Incorrect. They refer to different things.","Incorrect. ER cardinality describes relationship ratios, not data types."]},

{q:"A 1:1 (one-to-one) relationship between entities A and B means:",trap:false,
 opts:["A can have many B's, and B can have many A's","Each instance of A is associated with at most one instance of B, and vice versa","A and B are the same entity","A is a subtype of B"],
 ans:1,
 exps:["Incorrect. That describes M:N.","✓ Correct. 1:1: Each occurrence of entity A corresponds to at most one occurrence of entity B. Example: PERSON and PASSPORT (each person has at most one passport; each passport belongs to one person). Often implemented by putting the FK on one of the tables.","Incorrect. A and B are distinct entities.","Incorrect. Subtyping/specialization is a different ER concept."]},

{q:"In ER diagrams, attributes of a weak entity are shown as:",trap:true,
 opts:["Regular ovals","Double ovals for the weak entity's key attribute (partial key is underlined with dashes)","Rectangles","Diamonds"],
 ans:1,
 exps:["Incorrect. Regular ovals are for strong entity attributes.","✓ Correct. Weak entity attributes use the same ovals, but the partial key (discriminator) is underlined with a dashed/dotted underline (to distinguish from the solid underline of a strong entity's primary key). The weak entity itself is shown in a double rectangle.","Incorrect. Rectangles are for entities.","Incorrect. Diamonds are for relationships."]},

{q:"What is 'participation constraint' in ER modelling?",trap:false,
 opts:["The constraint on the number of attributes an entity can have","Whether entity participation in a relationship is total (mandatory) or partial (optional)","The maximum number of relationships an entity can have","A constraint on the data type of attributes"],
 ans:1,
 exps:["Incorrect. Attribute count is not a participation constraint.","✓ Correct. Participation: Total participation (double line) — every instance of the entity MUST participate in the relationship (mandatory). Partial participation (single line) — some instances may not participate (optional). Example: every employee MUST work in a department (total), but not every department has a manager (partial).","Incorrect. The number of relationships is not what participation constraints define.","Incorrect. Domain constraints handle data type restrictions."]},

{q:"Which of the following is an example of a multivalued attribute?",trap:false,
 opts:["Date of birth (a person has one birth date)","Phone numbers (a person can have multiple phone numbers)","Employee ID (unique per employee)","Salary (one value per employee)"],
 ans:1,
 exps:["Incorrect. Date of birth is a single-valued attribute — one value per entity.","✓ Correct. A multivalued attribute can hold multiple values for a single entity instance. Phone numbers are multivalued — a person can have home, work, and mobile numbers. In ER diagrams, multivalued attributes are shown in double ovals.","Incorrect. Employee ID is a single-valued, key attribute.","Incorrect. Salary is single-valued — one current salary per employee."]},

{q:"What is the difference between a conceptual model and a logical model?",trap:false,
 opts:["They are identical","Conceptual model is high-level and technology-independent (ER diagram); logical model translates concepts to a specific data model (tables, columns, data types) but without DBMS-specific details","Conceptual model defines physical storage; logical model defines the user interface","Logical model uses ER diagrams; conceptual model uses table schemas"],
 ans:1,
 exps:["Incorrect. They serve different purposes and levels of detail.","✓ Correct. Conceptual: What data is needed — entities, relationships, attributes. Tool-independent, for stakeholder communication. Logical: How data is structured — tables, columns, data types, normalization, FKs. DBMS-independent (no storage specifics). Physical: Implementation specifics (indexes, partitions, storage engine).","Incorrect. Physical storage is the physical model's concern.","Incorrect. This reverses the descriptions."]},

{q:"A 'derived attribute' in ER modelling is:",trap:false,
 opts:["An attribute inherited from a parent entity","An attribute whose value is computed from other stored attributes (shown with dashed oval)","An attribute that is part of the primary key","An attribute that can be NULL"],
 ans:1,
 exps:["Incorrect. Inherited attributes relate to ER generalization/specialization.","✓ Correct. A derived attribute's value is calculated from other attributes and is not stored directly. Example: 'age' derived from 'date_of_birth'. Shown with a dashed/dotted oval in ER diagrams. Storing it would cause update anomalies.","Incorrect. Key attributes are underlined, not dashed.","Incorrect. Nullable attributes are just optional attributes."]},

{q:"TRAP: Every entity in an ER diagram must have a primary key.",trap:true,
 opts:["True — every entity must have a primary key in ER theory","False — weak entities do not have a full primary key; they use a partial key + owner's key","True — even weak entities have their own complete primary key","False — only strong entities with more than 5 attributes need a primary key"],
 ans:1,
 exps:["Incorrect. Weak entities are an exception — they lack a complete PK.","✓ Correct. Strong entities have their own primary key. Weak entities do NOT have a complete primary key of their own — they have only a partial key (discriminator) and rely on the owner entity's PK for full identification.","Incorrect. Weak entities lack a complete independent PK — that's what makes them 'weak'.","Incorrect. Key requirements have nothing to do with the number of attributes."]},

{q:"What does 'ternary relationship' mean in ER modelling?",trap:false,
 opts:["A relationship between exactly two entities","A relationship involving exactly three entity types simultaneously","A three-level nested query","A table with three foreign keys"],
 ans:1,
 exps:["Incorrect. A binary relationship involves two entities.","✓ Correct. A ternary relationship involves three entity types connected simultaneously in one relationship. Example: DOCTOR prescribes MEDICINE to PATIENT — three entities in one relationship. Cannot always be decomposed into binary relationships without losing information.","Incorrect. Query nesting depth is unrelated to ER relationships.","Incorrect. Table structure is physical implementation, not ER concept."]},

{q:"The 'crow's foot' notation in ER diagrams represents:",trap:false,
 opts:["A type of entity that is unusually complex","A visual notation for cardinality and participation constraints — using crow's feet (multiple lines) for 'many' and single lines for 'one'","The primary key attribute notation","A deprecated ER diagram format"],
 ans:1,
 exps:["Incorrect. Crow's foot is a notation style, not an entity type.","✓ Correct. Crow's foot (IE notation) is a popular ER diagram notation alternative to Chen notation. Crow's foot symbol (three prongs) = 'many'. Single line = 'one'. Circle = 'zero'. Vertical bar = 'one (mandatory)'. Widely used in database tools like PostgreSQL's pgAdmin.","Incorrect. Primary keys are underlined in Chen notation; crow's foot handles cardinality.","Incorrect. Crow's foot notation is widely used today, not deprecated."]},
]

]; // end QUESTIONS

// Generate mixed quiz (50 random questions from all topics)
function getMixedQuestions(count = 50) {
  const all = [];
  QUESTIONS.forEach((topicQs, topicIdx) => {
    topicQs.forEach(q => all.push({ ...q, topicIdx }));
  });
  // Shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, count);
}

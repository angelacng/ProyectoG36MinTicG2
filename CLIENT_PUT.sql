BEGIN
    UPDATE CLIENT
    SET
    EMAIL = :email,
    AGE = :age,
    NAME = :name
    WHERE ID = :id;
    :status_code := 201;
END;